import { observable, makeObservable, runInAction, action, computed } from 'mobx';
import Income, { IncomeRequest } from '../types/income';
import Expenditure, { ExpenditureRequest } from '../types/expenditure';
import transactionService from '../services/transaction';
import RootStore from './RootStore';
import { filtering } from '../utils/filter';
import Query from '../types/query';

export default class TransactionStore {
  @observable transactions: Array<Income | Expenditure> = [];
  @observable isFilterMode = false;
  @observable isLoading = true;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  findTransactions = async (accountbookId: number, startDate: Date, endDate: Date): Promise<void> => {
    const transactions = await transactionService.getTransactions(accountbookId, startDate, endDate);
    runInAction(() => {
      this.transactions = transactions;
      this.isLoading = false;
      this.isFilterMode = true;
    });
  };

  @action
  filterTransactions = async (
    accountbookId: number,
    { startDate, endDate, incomeCategory, expenditureCategory, account }: Query,
  ): Promise<void> => {
    await this.findTransactions(accountbookId, new Date(startDate as string), new Date(endDate as string));
    runInAction(() => {
      this.transactions = filtering(this.transactions, { account, incomeCategory, expenditureCategory });
      this.isFilterMode = true;
      this.isLoading = false;
    });
  };

  createIncome = async (income: IncomeRequest): Promise<void> => {
    const createdIncome = await transactionService.createIncome(income);
    this.addNewTransaction(createdIncome);
  };

  createExpenditure = async (expenditure: ExpenditureRequest): Promise<void> => {
    const createdExpenditure = await transactionService.createExpenditure(expenditure);
    this.addNewTransaction(createdExpenditure);
  };

  @action
  addNewTransaction = (transaction: Income | Expenditure): void => {
    const date = new Date(transaction.date);
    const currentDate = this.rootStore.dateStore.startDate;
    if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
      this.transactions = [...this.transactions, transaction];
    }
  };
}
