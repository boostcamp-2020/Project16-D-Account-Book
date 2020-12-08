import { observable, action, makeObservable, computed } from 'mobx';
import RootStore from '../RootStore';
import { dateOptions } from '../../__dummy-data__/store/formFilterStore';
import datePeriod from '../../constants/datePeriod';
import { getFormattedDate } from '../../utils/date';
import Options from '../../types/dropdownOptions';
import { ParsedQuery } from 'query-string';

export default class FormFilterStore {
  rootStore: RootStore;
  @observable show = false;
  @observable dateOptions: Options[] = dateOptions;
  @observable selectedDate = datePeriod.ALL;
  @observable startDate = { text: '', date: new Date(0) };
  @observable endDate = { text: '', date: new Date(new Date().getTime() + 1000 * 60 * 60 * 24) };
  @observable accountOptions: Options[] = [];
  @observable selectedAccounts: string[] = [];
  @observable incomeCategoryOptions: Options[] = [];
  @observable selectedIncomeCategories: string[] = [];
  @observable expenditureCategoryOptions: Options[] = [];
  @observable selectedExpenditureCategories: string[] = [];
  @observable query: ParsedQuery<string> | null = null;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
    this.init();
  }

  @action
  init = (): void => {
    this.dateOptions = dateOptions;
    this.selectedDate = datePeriod.ALL;
    this.startDate = { text: '', date: new Date(0) };
    this.endDate = { text: '', date: new Date(new Date().getTime() + 1000 * 60 * 60 * 24) };
    this.accountOptions = this.rootStore.accountStore.accountFilterOptions;
    this.selectedAccounts = this.accountOptions.map((option) => option.value);
    this.incomeCategoryOptions = this.rootStore.categoryStore.incomeFilterOptions;
    this.selectedIncomeCategories = this.incomeCategoryOptions.map((option) => option.value);
    this.expenditureCategoryOptions = this.rootStore.categoryStore.expenditureFilterOptions;
    this.selectedExpenditureCategories = this.expenditureCategoryOptions.map((option) => option.value);
  };

  @action
  setShow = (show: boolean): void => {
    this.show = show;
  };

  @action
  onChangeDate = (period: string): void => {
    const startDate = new Date();
    let endDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);

    switch (period) {
      case datePeriod.ALL:
        this.startDate.date = new Date(0);
        this.endDate.date = endDate;
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
    endDate = new Date(endDate.getTime() - 1000 * 60 * 60 * 24);
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

  @action
  setFilterInfo = (): void => {
    const { start_date, end_date, account, income_category, expenditure_category } = this.query as ParsedQuery<string>;
    const startDate = start_date as string;
    const endDate = end_date as string;
    const incomeCategory = income_category as string;
    const expenditureCategory = expenditure_category as string;
    this.selectedAccounts = (account as string).length === 0 ? [] : (account as string).split(' ');
    this.selectedIncomeCategories = incomeCategory.length === 0 ? [] : incomeCategory.split(' ');
    this.selectedExpenditureCategories = expenditureCategory.length === 0 ? [] : expenditureCategory.split(' ');
    this.startDate.date = new Date(startDate);
    this.endDate.date = new Date(endDate);

    let tempDate = new Date(startDate);
    const day = 1000 * 60 * 60 * 24;
    if (tempDate.setFullYear(tempDate.getFullYear() + 1) + day < this.endDate.date.getTime()) {
      this.onChangeDate(datePeriod.ALL);
      return;
    }

    tempDate = new Date(startDate);
    if (tempDate.setMonth(tempDate.getMonth() + 6) + day < this.endDate.date.getTime()) {
      this.onChangeDate(datePeriod.LAST_ONE_YEAR);
      return;
    }

    tempDate = new Date(startDate);
    if (tempDate.setMonth(tempDate.getMonth() + 3) + day < this.endDate.date.getTime()) {
      this.onChangeDate(datePeriod.LAST_SIX_MONTH);
      return;
    }

    tempDate = new Date(startDate);
    if (tempDate.setMonth(tempDate.getMonth() + 1) + day < this.endDate.date.getTime()) {
      this.onChangeDate(datePeriod.LAST_THREE_MONTH);
      return;
    }

    tempDate = new Date(startDate);
    if (tempDate.setDate(tempDate.getDate() + 7) < this.endDate.date.getTime()) {
      this.onChangeDate(datePeriod.LAST_ONE_MONTH);
      return;
    }

    this.onChangeDate(datePeriod.LAST_ONE_WEEK);
  };
}
