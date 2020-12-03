import { observable, action, makeObservable, computed } from 'mobx';
import RootStore from '../RootStore';
import {
  dateOptions,
  accountOptions,
  incomeCategoryOptions,
  expenditureCategoryOptions,
} from '../../__dummy-data__/store/formFilterStore';
import datePeriod from '../../constants/datePeriod';
import { getFormattedDate } from '../../utils/date';

export default class FormFilterStore {
  rootStore;
  @observable show = false;
  @observable dateOptions = dateOptions;
  @observable selectedDate = datePeriod.ALL;
  @observable startDate = { text: '', date: new Date(0) };
  @observable endDate = { text: '', date: new Date() };
  @observable accountOptions = accountOptions;
  @observable selectedAccounts: string[] = accountOptions.map((option) => option.value);
  @observable incomeCategoryOptions = incomeCategoryOptions;
  @observable selectedIncomeCategories: string[] = incomeCategoryOptions.map((option) => option.value);
  @observable expenditureCategoryOptions = expenditureCategoryOptions;
  @observable selectedExpenditureCategories: string[] = expenditureCategoryOptions.map((option) => option.value);

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  init = (): void => {
    this.dateOptions = dateOptions;
    this.selectedDate = datePeriod.ALL;
    this.startDate = { text: '', date: new Date(0) };
    this.endDate = { text: '', date: new Date() };
    this.accountOptions = accountOptions;
    this.selectedAccounts = accountOptions.map((option) => option.value);
    this.incomeCategoryOptions = incomeCategoryOptions;
    this.selectedIncomeCategories = incomeCategoryOptions.map((option) => option.value);
    this.expenditureCategoryOptions = expenditureCategoryOptions;
    this.selectedExpenditureCategories = expenditureCategoryOptions.map((option) => option.value);
  };

  @action
  setShow = (show: boolean): void => {
    this.show = show;
  };

  @action
  onChangeDate = (period: string): void => {
    const startDate = new Date();
    const endDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);

    switch (period) {
      case datePeriod.ALL:
        this.startDate.date = new Date(0);
        this.endDate.date = new Date();
        this.startDate.text = '';
        this.endDate.text = '';
        return;
      case datePeriod.LAST_ONE_WEEK:
        startDate.setDate(endDate.getDate() - 7);
        break;
      case datePeriod.LAST_ONE_MONTH:
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case datePeriod.LAST_THREE_MONTH:
        startDate.setMonth(endDate.getMonth() - 3);
        break;
      case datePeriod.LAST_SIX_MONTH:
        startDate.setMonth(endDate.getMonth() - 6);
        break;
      case datePeriod.LAST_ONE_YEAR:
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
    }

    this.startDate.date = startDate;
    this.endDate.date = endDate;
    this.startDate.text = `시작일 ${startDate.getFullYear()}년 ${startDate.getMonth() + 1}월 ${startDate.getDate()}일`;
    this.endDate.text = `마지막일 ${endDate.getFullYear()}년 ${endDate.getMonth() + 1}월 ${endDate.getDate()}일`;
    this.selectedDate = period;
  };

  @action
  onChangeAcoount = (selectedAccounts: string[]): void => {
    this.selectedAccounts = selectedAccounts;
  };

  @action
  onChangeIncomeCategory = (selectedIncomeCategories: string[]): void => {
    this.selectedIncomeCategories = selectedIncomeCategories;
  };

  @action
  onChangeExpenditureCategory = (selectedExpenditureCategories: string[]): void => {
    this.selectedExpenditureCategories = selectedExpenditureCategories;
  };

  @computed
  get getQuery(): string {
    const startDateQuery = `start_date=${getFormattedDate({ date: this.startDate.date, format: '.' })}`;
    const endDateQuery = `end_date=${getFormattedDate({ date: this.endDate.date, format: '.' })}`;
    const accountQuery = `account=${this.selectedAccounts.join('+')}`;
    const incomeCategoryQuery = `income_category=${this.selectedIncomeCategories.join('+')}`;
    const expenditureCategoryQuery = `expenditure_category=${this.selectedExpenditureCategories.join('+')}`;
    return `${startDateQuery}&${endDateQuery}&${accountQuery}&${incomeCategoryQuery}&${expenditureCategoryQuery}`;
  }
}
