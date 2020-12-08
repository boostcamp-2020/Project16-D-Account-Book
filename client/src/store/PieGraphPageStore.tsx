import RootStore from './RootStore';
import Income from '../types/income';
import Expenditure from '../types/expenditure';
import { dateOptions } from '../__dummy-data__/store/formFilterStore';
import { makeObservable, observable } from 'mobx';
import { datePeriodNumber } from '../constants/datePeriod';

export default class PieGraphPageStore {
  rootStore: RootStore;
  dateOptions = dateOptions;

  @observable
  transactions: (Income | Expenditure)[] = [];

  @observable
  selectedDate;

  @observable
  startDate;

  @observable
  endDate;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }
}
