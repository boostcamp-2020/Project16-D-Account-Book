import RootStore from './RootStore';
import Income from '../types/income';
import Expenditure from '../types/expenditure';
import { dateOptions } from '../__dummy-data__/store/formFilterStore';
import { action, makeObservable, observable, computed } from 'mobx';
import datePeriod, { datePeriodNumber } from '../constants/datePeriod';

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
  endDate: Date;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.endDate = new Date();
    this.startDate = new Date();
    this.startDate.setMonth(this.endDate.getMonth() - 1);

    makeObservable(this);
  }

  @action
  changeSelectedDate = (selectedType: string): void => {
    this.selectedDate = selectedType;
    this.startDate = this.getBeforeDateByPeriod(this.endDate, selectedType);
    if (selectedType === datePeriod.ALL) {
      this.endDate = new Date();
      this.startDate = new Date(0);
    }
  };

  @action
  moveToPrev = (): void => {
    this.endDate = this.startDate;
    this.startDate = this.getBeforeDateByPeriod(this.endDate, this.selectedDate);
  };

  @action
  moveToNext = (): void => {
    const nextDate = this.getNextDateByPeriod(this.endDate, this.selectedDate);
    if (nextDate.valueOf() > new Date().valueOf()) {
      return;
    }
    this.startDate = this.endDate;
    this.endDate = nextDate;
  };

  getBeforeDateByPeriod = (endDate: Date, selectedType: string): Date => {
    const result = new Date(endDate.valueOf());
    result.setFullYear(endDate.getFullYear() - datePeriodNumber[selectedType].year);
    result.setMonth(endDate.getMonth() - datePeriodNumber[selectedType].month);
    result.setDate(endDate.getDate() - datePeriodNumber[selectedType].day);
    return result;
  };

  getNextDateByPeriod = (endDate: Date, selectedType: string): Date => {
    const result = new Date(endDate.valueOf());
    //year
    result.setFullYear(endDate.getFullYear() + datePeriodNumber[selectedType].year);
    //month
    result.setMonth(endDate.getMonth() + datePeriodNumber[selectedType].month);
    //date
    result.setDate(endDate.getDate() + datePeriodNumber[selectedType].day);
    return result;
  };

  @computed
  get filteredDate(): string {
    return `${this.startDate.getFullYear()}년 ${
      this.startDate.getMonth() + 1
    }월 ${this.startDate.getDate()}일 ~ ${this.endDate.getFullYear()}년 ${
      this.endDate.getMonth() + 1
    }월 ${this.endDate.getDate()}알`;
  }
}
