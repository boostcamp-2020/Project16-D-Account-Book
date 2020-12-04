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
  updateIncomeCategories = async (id: number): Promise<void> => {
    this.incomeCategories = await CategoryService.getIncomeCategoryById(id);
  };

  @action
  updateExpenditureCategories = async (id: number): Promise<void> => {
    this.expenditureCategories = await CategoryService.getExpenditureCategoryById(id);
  };
}
