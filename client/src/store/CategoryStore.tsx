import { observable, action, makeObservable, computed } from 'mobx';
import Category from '../types/category';
import RootStore from './RootStore';
import CategoryService from '../services/category';
import Options from '../types/dropdownOptions';
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

  @computed
  get incomeOptions(): Options[] {
    const data: Options[] = this.incomeCategories.map((income) => {
      return {
        value: income.id + '',
        label: income.name,
      };
    });

    return data;
  }

  @computed
  get expenditureOptions(): Options[] {
    const data: Options[] = this.expenditureCategories.map((income) => {
      return {
        value: income.id + '',
        label: income.name,
      };
    });

    return data;
  }
}
