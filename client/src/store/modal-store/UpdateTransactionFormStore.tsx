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

  // 수입일때 True, 지출일때는 False이다.
  @computed
  get isIncomeMode(): boolean | undefined {
    if (this.incomeExpenditure === undefined) {
      return undefined;
    }

    return isIncome(this.incomeExpenditure);
  }

  @computed
  get converIncomeExpenditureToTransactionForm(): ITransactionForm | undefined {
    if (this.incomeExpenditure === undefined) {
      return undefined;
    }

    if (isIncome(this.incomeExpenditure)) {
      return {
        classify: true,
        price: this.incomeExpenditure.amount + '',
        categories: this.incomeExpenditure.category.id + '',
        accounts: this.incomeExpenditure.account.id + '',
        content: this.incomeExpenditure.content,
        date: this.incomeExpenditure.date as string,
        memo: this.incomeExpenditure.memo || '',
      };
    }

    if (!isIncome(this.incomeExpenditure)) {
      return {
        classify: false,
        price: this.incomeExpenditure.amount + '',
        categories: this.incomeExpenditure.category.id + '',
        accounts: this.incomeExpenditure.account.id + '',
        content: this.incomeExpenditure.place,
        date: this.incomeExpenditure.date as string,
        memo: this.incomeExpenditure.memo || '',
      };
    }
  }
}
