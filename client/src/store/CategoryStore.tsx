import { observable, action, makeObservable, computed } from 'mobx';
import Category, { CategoryRequest } from '../types/category';
import RootStore from './RootStore';
import CategoryService from '../services/category';
import Options from '../types/dropdownOptions';
import category from '../services/category';
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

  createIncomeCategories = async (incomeCategory: CategoryRequest): Promise<void> => {
    const createdExpenditureCategory = await CategoryService.createIncomeCategory(incomeCategory);
    this.addNewExpenditureCategory(createdExpenditureCategory);
  };

  @action
  addNewIncomeCategory = (incomeCategory: Category): void => {
    this.incomeCategories = [...this.incomeCategories, incomeCategory];
  };

  createExpenditureCategories = async (expenditureCategory: CategoryRequest): Promise<void> => {
    const createdExpenditureCategory = await CategoryService.createExpenditureCategory(expenditureCategory);
    this.addNewExpenditureCategory(createdExpenditureCategory);
  };

  @action
  addNewExpenditureCategory = (expenditureCategory: Category): void => {
    this.expenditureCategories = [...this.expenditureCategories, expenditureCategory];
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
  get incomeFilterOptions(): Options[] {
    const data: Options[] = this.incomeCategories.map((income) => {
      return {
        value: income.name,
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

  @computed
  get expenditureFilterOptions(): Options[] {
    const data: Options[] = this.expenditureCategories.map((income) => {
      return {
        value: income.name,
        label: income.name,
      };
    });

    return data;
  }
}
