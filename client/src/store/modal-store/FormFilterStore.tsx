import { observable, action, makeObservable } from 'mobx';
import RootStore from '../RootStore';
import { dateOptions, accountOptions } from '../../__dummy-data__/store/formFilterStore';
import datePeriod from '../../constants/datePeriod';

export default class FormFilterStore {
  rootStore;
  @observable show = false;
  @observable dateOptions = dateOptions;
  @observable startDate = { text: '', date: new Date(0) };
  @observable endDate = { text: '', date: new Date() };
  @observable accountOptions = accountOptions;
  @observable selectedAccounts: string[] = [];

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  setShow = (show: boolean): void => {
    this.show = show;
  };

  @action
  onChangeDate = (period: string): void => {
    const startDate = new Date();
    const endDate = new Date();

    switch (period) {
      case datePeriod.ALL:
        this.startDate.date = new Date(0);
        this.endDate.date = new Date();
        this.startDate.text = '';
        this.endDate.text = '';
        return;
      case datePeriod.LAST_ONE_WEEK:
        endDate.setDate(endDate.getDate() - 7);
        break;
      case datePeriod.LAST_ONE_MONTH:
        endDate.setMonth(endDate.getMonth() - 1);
        break;
      case datePeriod.LAST_THREE_MONTH:
        endDate.setMonth(endDate.getMonth() - 3);
        break;
      case datePeriod.LAST_SIX_MONTH:
        endDate.setMonth(endDate.getMonth() - 6);
        break;
      case datePeriod.LAST_ONE_YEAR:
        endDate.setFullYear(endDate.getFullYear() - 1);
        break;
    }

    this.startDate.date = startDate;
    this.endDate.date = endDate;
    this.startDate.text = `시작일 ${startDate.getFullYear()}년 ${startDate.getMonth() + 1}월 ${startDate.getDate()}일`;
    this.endDate.text = `마지막일 ${endDate.getFullYear()}년 ${endDate.getMonth() + 1}월 ${endDate.getDate()}일`;
  };

  @action
  onChangeAcoount = (accounts: string[]): void => {
    this.selectedAccounts = accounts;
  };
}
