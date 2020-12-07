import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';
import Income from '../../types/income';
import Expenditure from '../../types/expenditure';

type IncomeExpenditure = Income | Expenditure;

export default class UpdateTransactionFormStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  incomeExpenditure: Income | Expenditure | undefined = undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  toggleShow = (): void => {
    this.show = !this.show;
  };

  @action
  setShowTrue = (): void => {
    this.show = true;
  };

  @action
  setShowFalse = (): void => {
    this.show = false;
  };

  @action
  loadIncomeExpenditure = (incomeExpenditure: IncomeExpenditure): void => {
    this.incomeExpenditure = incomeExpenditure;
  };
}
