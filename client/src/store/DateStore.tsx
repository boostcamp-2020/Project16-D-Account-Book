import { observable, action, makeObservable } from 'mobx';
import { getFirstDateOfPreviousMonth, getFirstDateOfNextMonth } from '../utils/date';
import RootStore from './RootStore';
export default class DateStore {
  rootStore;

  @observable
  startDate: Date;

  @observable
  endDate: Date;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    const currentDate = new Date();
    this.startDate = new Date(`${currentDate.getFullYear()}.${currentDate.getMonth() + 1}.1`);
    this.endDate = getFirstDateOfNextMonth(this.startDate);
    this.rootStore = rootStore;
  }

  @action
  moveToNextMonth = (): void => {
    this.startDate = getFirstDateOfNextMonth(this.startDate);
    this.endDate = getFirstDateOfNextMonth(this.startDate);
  };

  @action
  moveToPreviousMonth = (): void => {
    this.startDate = getFirstDateOfPreviousMonth(this.startDate);
    this.endDate = getFirstDateOfNextMonth(this.startDate);
  };
}
