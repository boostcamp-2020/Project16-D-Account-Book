import { observable, action, makeObservable } from 'mobx';
import Category from '../types/category';
import RootStore from './RootStore';
import CategoryService from '../services/category';
export default class CategoryStore {
  rootStore;

  @observable
  incomeCategories: Category[] = [];

  @observable
  expenditureCategories: Category[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  changeIncomeCategories = (category: Category[]): void => {
    this.incomeCategories = category;
  };

  @action
  changeExpenditureCategories = (category: Category[]): void => {
    this.expenditureCategories = category;
  };

  updateIncomeCategories = async (id: number): Promise<void> => {
    const incomeCategories = await CategoryService.getIncomeCategoryById(id);
    this.changeIncomeCategories(incomeCategories);
  };

  updateExpenditureCategories = async (id: number): Promise<void> => {
    const expenditureCategories = await CategoryService.getExpenditureCategoryById(id);
    this.changeExpenditureCategories(expenditureCategories);
  };
}
