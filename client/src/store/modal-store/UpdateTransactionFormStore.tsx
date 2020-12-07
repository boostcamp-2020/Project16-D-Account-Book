import { observable, action, makeAutoObservable, computed } from 'mobx';
import RootStore from '../RootStore';
import Income, { isIncome } from '../../types/income';
import Expenditure from '../../types/expenditure';
import { ITransactionForm } from '../../types/TransactionForm';

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

  @computed
  get isIncomeMode(): boolean | undefined {
    if (this.incomeExpenditure === undefined) {
      return undefined;
    }

    return isIncome(this.incomeExpenditure);
  }
}
