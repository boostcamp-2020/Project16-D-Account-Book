import RootStore from './RootStore';
import Income from '../types/income';
import Expenditure from '../types/expenditure';
import { dateOptions } from '../__dummy-data__/store/formFilterStore';
import { action, makeObservable, observable, computed, flow } from 'mobx';
import datePeriod, { datePeriodNumber } from '../constants/datePeriod';
import transactionService from '../services/transaction';
import PieChartValue from '../types/pieChartValue';
import { getOnlyIncome, getTopFiveCategory, getOnlyExpenditure } from '../utils/filter';
import BoxChartValue from '../types/boxChartValue';
import { CancellablePromise } from 'mobx/dist/api/flow';
import getSWRGenerator from '../utils/generator/getSWRGenerator';
export default class PieGraphPageStore {
  rootStore: RootStore;
  dateOptions = dateOptions;

  @observable
  transactions: (Income | Expenditure)[] = [];

  @observable
  selectedDate = datePeriod.LAST_ONE_MONTH;

  @observable
  startDate: Date;

  @observable
  incomeMode = false;

  @observable
  endDate: Date;

  transactionDebounceTimer: undefined | number;
  latestFindTransactions: CancellablePromise<void> | undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.endDate = new Date();
    this.startDate = new Date();
    this.startDate.setMonth(this.endDate.getMonth() - 1);
    this.endDate.setDate(this.endDate.getDate() + 1);

    makeObservable(this);
  }

  @action
  changeSelectedDate = (selectedType: string, accountbookId: number): void => {
    this.selectedDate = selectedType;
    const prevDate = this.getBeforeDateByPeriod(this.endDate, selectedType);
    this.startDate = prevDate;
    this.dateChange(prevDate, this.endDate, accountbookId);
    if (selectedType === datePeriod.ALL) {
      this.startDate = new Date(0);
      this.dateChange(this.startDate, this.endDate, accountbookId);
    }
  };

  @action
  moveToPrev = (accountbookId: number): void => {
    const endDate = this.startDate;
    const startDate = this.getBeforeDateByPeriod(endDate, this.selectedDate);
    this.startDate = startDate;
    this.endDate = endDate;
    this.dateChange(startDate, endDate, accountbookId);
  };

  @action
  moveToNext = (accountbookId: number): void => {
    this.startDate = this.endDate;
    this.endDate = this.getNextDateByPeriod(this.endDate, this.selectedDate);
    this.dateChange(this.startDate, this.endDate, accountbookId);
  };

  @action
  switchIncomeMode = (): void => {
    this.incomeMode = !this.incomeMode;
  };

  dateChange = (startDate: Date, endDate: Date, accountbookId: number): void => {
    if (this.transactionDebounceTimer !== undefined) {
      if (this.latestFindTransactions !== undefined) {
        this.latestFindTransactions.cancel();
      }
      clearTimeout(this.transactionDebounceTimer);
    }
    this.latestFindTransactions = undefined;

    this.transactionDebounceTimer = setTimeout(async () => {
      const cancel = this._dateChange(startDate, endDate, accountbookId);
      this.latestFindTransactions = cancel;
      cancel.catch(() => {
        this.latestFindTransactions = undefined;
      });
    }, 100);
  };

  _dateChange = flow(function* (this: PieGraphPageStore, startDate: Date, endDate: Date, accountbookId: number) {
    const beforeDate = this.getBeforeDateByPeriod(this.startDate, this.selectedDate);
    const afterDate = this.getNextDateByPeriod(this.endDate, this.selectedDate);
    const generation = getSWRGenerator(accountbookId, startDate, endDate, beforeDate, afterDate);
    const { value: cachedValue } = yield generation.next();
    if (cachedValue !== undefined) {
      this.transactions = cachedValue;
    }
    const { value: refreshedValue } = yield generation.next();
    this.transactions = refreshedValue;
  });

  loadTransactions = flow(function* (this: PieGraphPageStore, accountbookId: number) {
    const beforeDate = this.getBeforeDateByPeriod(this.startDate, this.selectedDate);
    const afterDate = this.getNextDateByPeriod(this.startDate, this.selectedDate);
    const generation = transactionService.getTransactions(
      accountbookId,
      this.startDate,
      this.endDate,
      beforeDate,
      afterDate,
    );
    const { value: cachedValue } = yield generation.next();
    if (cachedValue !== undefined) {
      this.transactions = cachedValue;
    }
    const { value: refreshedValue } = yield generation.next();
    this.transactions = refreshedValue;
  });

  getBeforeDateByPeriod = (endDate: Date, selectedType: string): Date => {
    const result = new Date(endDate.valueOf());
    result.setFullYear(endDate.getFullYear() - datePeriodNumber[selectedType].year);
    result.setMonth(endDate.getMonth() - datePeriodNumber[selectedType].month);
    result.setDate(endDate.getDate() - datePeriodNumber[selectedType].day - 1);
    return result;
  };

  getNextDateByPeriod = (endDate: Date, selectedType: string): Date => {
    const result = new Date(endDate.valueOf());
    result.setFullYear(endDate.getFullYear() + datePeriodNumber[selectedType].year);
    result.setMonth(endDate.getMonth() + datePeriodNumber[selectedType].month);
    result.setDate(endDate.getDate() + datePeriodNumber[selectedType].day + 1);
    return result;
  };

  @computed
  get filteredDate(): string {
    return `${this.startDate.getFullYear()}년 ${
      this.startDate.getMonth() + 1
    }월 ${this.startDate.getDate()}일 ~ ${this.endDate.getFullYear()}년 ${this.endDate.getMonth() + 1}월 ${
      this.endDate.getDate() - 1
    }일`;
  }

  @computed
  get pieChartValue(): PieChartValue[] {
    const targetTransactions = this.incomeMode
      ? getOnlyIncome(this.transactions)
      : getOnlyExpenditure(this.transactions);

    const topOfFive = getTopFiveCategory(targetTransactions);
    return topOfFive;
  }

  @computed
  get boxChartValue(): BoxChartValue[] {
    const targetTransactions = this.incomeMode
      ? getOnlyIncome(this.transactions)
      : getOnlyExpenditure(this.transactions);

    const topOfFive = getTopFiveCategory(targetTransactions);
    return topOfFive;
  }

  @computed
  get totalValue(): number {
    const transactions: Array<Income | Expenditure> = this.incomeMode
      ? getOnlyIncome(this.transactions)
      : getOnlyExpenditure(this.transactions);

    return transactions.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }
}
