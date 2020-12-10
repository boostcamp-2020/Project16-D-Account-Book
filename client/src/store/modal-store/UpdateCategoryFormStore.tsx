import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';
import Category from '../../types/category';

export default class UpdateCategoryFormStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  check = true;

  @observable
  noChange = true;

  @observable
  incomeFlag = true;

  @observable
  originalIncomeCategoryName = '';

  @observable
  originalExpenditureCategoryName = '';

  @observable
  incomeCategory: Category | undefined = undefined;

  @observable
  expenditureCategory: Category | undefined = undefined;

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
  setCheckTrue = (): void => {
    this.check = true;
  };

  @action
  setCheckFalse = (): void => {
    this.check = false;
  };

  @action
  setNoChangeTrue = (): void => {
    this.noChange = true;
  };

  @action
  setNoChangeFalse = (): void => {
    this.noChange = false;
  };

  @action
  setIncomeFlagTrue = (): void => {
    this.incomeFlag = true;
  };

  @action
  setIncomeFlagFalse = (): void => {
    this.incomeFlag = false;
  };

  @action
  loadIncomeCategory = (incomeCategory: Category): void => {
    this.incomeCategory = incomeCategory;
  };

  @action
  loadExpenditureCategory = (expenditureCategory: Category): void => {
    this.expenditureCategory = expenditureCategory;
  };

  @action
  loadOriginalIncomeCategory = (incomeCategoryName: string): void => {
    this.originalIncomeCategoryName = incomeCategoryName;
  };

  @action
  loadOriginalExpenditureCategory = (expenditureName: string): void => {
    this.originalExpenditureCategoryName = expenditureName;
  };
}
