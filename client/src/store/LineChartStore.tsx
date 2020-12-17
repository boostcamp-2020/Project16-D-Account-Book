import { makeObservable, observable, flow, computed, action } from 'mobx';
import Expenditure from '../types/expenditure';
import Income from '../types/income';
import RootStore from './RootStore';
import { getOnlyIncome, getOnlyExpenditure } from '../utils/filter';
import ITransaction from '../types/lineChartValue';
import { CancellablePromise } from 'mobx/dist/api/flow';
import getSWRGenerator from '../utils/generator/getSWRGenerator';
type IncomeExpenditure = Income | Expenditure;

export default class LineChartStore {
  rootStore: RootStore;

  @observable
  transactions: (Income | Expenditure)[] = [];

  @observable
  incomeMode = false;

  @observable
  isLoading = false;

  @observable
  currentDate: Date;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.currentDate = new Date();
    this.currentDate.setDate(1);
    makeObservable(this);
  }

  transactionDebounceTimer: undefined | number;
  latestFindTransactions: CancellablePromise<void> | undefined;

  @action
  nextMonth = (accountbookId: number): void => {
    const newDate = new Date();
    newDate.setDate(1);
    newDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate = newDate;
    this.getTransactions(accountbookId);
  };

  @action
  prevMonth = (accountbookId: number): void => {
    const newDate = new Date();
    newDate.setDate(1);
    newDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate = newDate;
    this.getTransactions(accountbookId);
  };

  @action
  toggleIncomeMode = (): void => {
    this.incomeMode = !this.incomeMode;
  };

  @action
  loadTransactions = (accountbookId: number): void => {
    this.getTransactions(accountbookId);
  };

  getTransactions = (accountbookId: number): void => {
    if (this.transactionDebounceTimer !== undefined) {
      if (this.latestFindTransactions !== undefined) {
        this.latestFindTransactions.cancel();
      }
      clearTimeout(this.transactionDebounceTimer);
    }
    this.latestFindTransactions = undefined;

    this.transactionDebounceTimer = setTimeout(async () => {
      const cancel = this.callTransactions(accountbookId);
      this.latestFindTransactions = cancel;
      cancel.catch(() => {
        this.latestFindTransactions = undefined;
      });
    }, 100);
  };

  callTransactions = flow(function* (this: LineChartStore, accountbookId) {
    const nextDate = new Date(this.currentDate.valueOf());
    nextDate.setMonth(this.currentDate.getMonth() + 1);
    nextDate.setDate(1);

    const generation = getSWRGenerator(accountbookId, this.currentDate, nextDate);
    const { value: cachedValue } = yield generation.next();
    if (cachedValue !== undefined) {
      this.transactions = cachedValue;
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }
    const { value: refreshedValue } = yield generation.next();
    this.isLoading = true;
    this.transactions = refreshedValue;
  });

  @computed
  get monthlyTransactions(): ITransaction[] {
    const result: IncomeExpenditure[] = this.getFilteredTransactions();
    const lineValues: ITransaction[] = result.map(({ date, amount }: Income | Expenditure) => {
      const convert: ITransaction = {
        date: new Date(date),
        value: amount,
      };
      return convert;
    });
    return lineValues;
  }

  @computed
  get monthlyTotalValue(): number {
    const transactions: IncomeExpenditure[] = this.getFilteredTransactions();

    const result = transactions.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);

    return result;
  }

  getFilteredTransactions = (): Income[] | Expenditure[] => {
    const transactions = this.incomeMode ? getOnlyIncome(this.transactions) : getOnlyExpenditure(this.transactions);
    return transactions;
  };
}
