import { observable, action, makeObservable, computed } from 'mobx';
import Category, { CategoryRequest } from '../types/category';
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

  createIncomeCategory = async (incomeCategory: CategoryRequest): Promise<void> => {
    const createdIncomeCategory = await CategoryService.createIncomeCategory(incomeCategory);
    this.addNewIncomeCategory(createdIncomeCategory);
  };

  @action
  addNewIncomeCategory = (incomeCategory: Category): void => {
    this.incomeCategories = [...this.incomeCategories, incomeCategory];
  };

  createExpenditureCategory = async (expenditureCategory: CategoryRequest): Promise<void> => {
    const createdExpenditureCategory = await CategoryService.createExpenditureCategory(expenditureCategory);
    this.addNewExpenditureCategory(createdExpenditureCategory);
  };

  @action
  addNewExpenditureCategory = (expenditureCategory: Category): void => {
    this.expenditureCategories = [...this.expenditureCategories, expenditureCategory];
  };

  deleteIncomeCategory = async (incomeCategoryId: number): Promise<void> => {
    await CategoryService.deleteIncomeCategory(incomeCategoryId);
    this.deleteIncomeCategoryById(incomeCategoryId);
  };

  @action
  deleteIncomeCategoryById = (incomeCategoryId: number): void => {
    this.incomeCategories = this.incomeCategories.filter((item) => item.id !== incomeCategoryId);
  };

  deleteExpenditureCategory = async (expenditureCategoryId: number): Promise<void> => {
    await CategoryService.deleteExpenditureCategory(expenditureCategoryId);
    this.deleteExpenditureCategoryById(expenditureCategoryId);
  };

  @action
  deleteExpenditureCategoryById = (expenditureCategoryId: number): void => {
    this.expenditureCategories = this.expenditureCategories.filter((item) => item.id !== expenditureCategoryId);
  };

  updateIncomeCategory = async (category: CategoryRequest, incomeCategoryId: number): Promise<void> => {
    await CategoryService.updateIncomeCategory(category, incomeCategoryId);
    this.updateIncomeCategories(category.accountbookId);
  };

  updateExpenditureCategory = async (category: CategoryRequest, expenditureCategoryId: number): Promise<void> => {
    await CategoryService.updateExpenditureCategory(category, expenditureCategoryId);
    this.updateExpenditureCategories(category.accountbookId);
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
