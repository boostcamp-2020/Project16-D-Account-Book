import { observable, makeObservable, action, flow } from 'mobx';
import Income, { IncomeRequest, isIncome } from '../types/income';
import Expenditure, { ExpenditureRequest } from '../types/expenditure';
import CsvTransaction from '../types/csvTransaction';
import transactionService from '../services/transaction';
import RootStore from './RootStore';
import { filtering } from '../utils/filter';
import Query from '../types/query';
import { CancellablePromise } from 'mobx/dist/api/flow';
import socket, { event } from '../socket';
import getSWRGenerator from '../utils/generator/getSWRGenerator';
import { sortByRecentDate } from '../utils/sortByRecentDate';
export default class TransactionStore {
  @observable
  transactions: Array<Income | Expenditure> = [];

  @observable
  sortedTransactions: Array<Income | Expenditure> = [];

  @observable
  isFilterMode = false;

  @observable
  isLoading = true;

  @observable
  items = 20;

  @observable
  lastScrollTop = 0;

  @observable
  csvTransactions: Array<CsvTransaction> = [];

  rootStore: RootStore;

  transactionDebounceTimer: undefined | number;
  latestFindTransactions: CancellablePromise<void> | undefined;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  loadCsvTransactions = (transactions: CsvTransaction[]): void => {
    this.csvTransactions = transactions;
  };

  findTransactions = (accountbookId: number, startDate: Date, endDate: Date): void => {
    if (this.transactionDebounceTimer !== undefined) {
      if (this.latestFindTransactions !== undefined) {
        this.latestFindTransactions.cancel();
      }
      clearTimeout(this.transactionDebounceTimer);
    }
    this.latestFindTransactions = undefined;

    this.transactionDebounceTimer = setTimeout(async () => {
      const cancel = this.getTransactions(accountbookId, startDate, endDate);
      this.latestFindTransactions = cancel;
      cancel.catch(() => {
        this.latestFindTransactions = undefined;
      });
    }, 100);
  };

  getTransactions = flow(function* (this: TransactionStore, accountbookId: number, startDate: Date, endDate: Date) {
    const generation = getSWRGenerator(accountbookId, startDate, endDate);

    const cached = yield generation.next();
    if (cached.value !== undefined) {
      this.isLoading = false;
      this.transactions = cached.value;
    } else {
      this.isLoading = true;
      this.sortedTransactions = sortByRecentDate(this.transactions.slice());
    }
    const refreshedData = yield generation.next();
    this.isLoading = false;
    this.transactions = refreshedData.value;
    this.sortedTransactions = sortByRecentDate(this.transactions.slice());
  });

  filterTransactions = flow(function* (
    this: TransactionStore,
    accountbookId: number,
    { startDate, endDate, incomeCategory, expenditureCategory, account }: Query,
  ) {
    const convertedStartDate = new Date(startDate as string);
    const convertedEndDate = new Date(endDate as string);

    const generation = getSWRGenerator(accountbookId, convertedStartDate, convertedEndDate);

    const cached = yield generation.next();
    if (cached.value !== undefined) {
      this.isLoading = false;
      this.transactions = filtering(cached.value, { account, incomeCategory, expenditureCategory });
      this.sortedTransactions = sortByRecentDate(this.transactions.slice());
    }
    const refreshedData = yield generation.next();
    this.isLoading = false;
    this.transactions = filtering(refreshedData.value, { account, incomeCategory, expenditureCategory });
    this.sortedTransactions = sortByRecentDate(this.transactions.slice());
    this.isFilterMode = true;
  });

  createIncome = async (income: IncomeRequest): Promise<void> => {
    const createdIncome = await transactionService.createIncome(income);
    this.addNewTransaction(createdIncome);
    socket.emit(event.UPDATE_TRANSACTIONS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  createExpenditure = async (expenditure: ExpenditureRequest): Promise<void> => {
    const createdExpenditure = await transactionService.createExpenditure(expenditure);
    this.addNewTransaction(createdExpenditure);
    socket.emit(event.UPDATE_TRANSACTIONS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  @action
  addNewTransaction = (transaction: Income | Expenditure): void => {
    const date = new Date(transaction.date);
    const startDate = this.rootStore.dateStore.startDate;
    const endDate = this.rootStore.dateStore.endDate;
    const filterFormStore = this.rootStore.modalStore.filterFormStore;

    if (!this.isFilterMode) {
      if (date.getTime() >= startDate.getTime() && date.getTime() < endDate.getTime()) {
        this.transactions.push(transaction);
      }
    } else if (
      date.getTime() >= filterFormStore.startDate.date.getTime() &&
      date.getTime() < filterFormStore.endDate.date.getTime()
    ) {
      this.transactions.push(transaction);
      const {
        selectedAccounts: account,
        selectedIncomeCategories: incomeCategory,
        selectedExpenditureCategories: expenditureCategory,
      } = this.rootStore.modalStore.filterFormStore;

      this.transactions = filtering(this.transactions, {
        account: account.join(' '),
        incomeCategory: incomeCategory.join(' '),
        expenditureCategory: expenditureCategory.join(' '),
      });
    }
  };

  deleteIncome = async (incomeId: number): Promise<void> => {
    try {
      await transactionService.deleteIncome(incomeId);
      this.deleteIncomeById(incomeId);
      socket.emit(event.UPDATE_TRANSACTIONS, this.rootStore.accountbookStore.currentAccountbookId);
    } catch {
      alert('삭제 실패');
    }
  };

  deleteExpenditure = async (expenditureId: number): Promise<void> => {
    try {
      await transactionService.deleteExpenditure(expenditureId);
      this.deleteExpenditureById(expenditureId);
      socket.emit(event.UPDATE_TRANSACTIONS, this.rootStore.accountbookStore.currentAccountbookId);
    } catch {
      alert('삭제 실패');
    }
  };

  @action
  deleteIncomeById = (incomeId: number): void => {
    this.transactions = this.transactions.filter((item) => {
      if (isIncome(item)) {
        return item.id !== incomeId;
      }
      return true;
    });
  };

  @action
  deleteExpenditureById = (expenditureId: number): void => {
    this.transactions = this.transactions.filter((item) => {
      if (!isIncome(item)) {
        return item.id !== expenditureId;
      }
      return true;
    });
  };

  patchIncome = async (income: IncomeRequest, incomeId: number): Promise<void> => {
    const response = await transactionService.patchIncome(income, incomeId);
    this.updateIncomeTransaction(response);
    socket.emit(event.UPDATE_TRANSACTIONS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  patchExpenditure = async (expenditure: ExpenditureRequest, expenditureId: number): Promise<void> => {
    const response = await transactionService.patchExpenditure(expenditure, expenditureId);
    this.updateExpenditureTransaction(response);
    socket.emit(event.UPDATE_TRANSACTIONS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  @action
  updateIncomeTransaction = (income: Income): void => {
    this.deleteIncomeById(income.id);
    this.addNewTransaction(income);
  };

  @action
  updateExpenditureTransaction = (expenditure: Expenditure): void => {
    this.deleteExpenditureById(expenditure.id);
    this.addNewTransaction(expenditure);
  };

  @action
  setItems = (items: number): void => {
    this.items = items;
  };

  @action
  setIsLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
  };

  @action
  setIsFilterMode = (isFilterMode: boolean): void => {
    this.isFilterMode = isFilterMode;
  };
}
