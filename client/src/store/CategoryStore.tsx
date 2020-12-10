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

  @observable
  incomeCategoryNames: string[] = [];

  @observable
  expenditureCategoryNames: string[] = [];

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
    this.incomeCategoryNames = incomeCategories.map((item) => item.name);
  };

  updateExpenditureCategories = async (id: number): Promise<void> => {
    const expenditureCategories = await CategoryService.getExpenditureCategoryById(id);
    this.changeExpenditureCategories(expenditureCategories);
    this.expenditureCategoryNames = expenditureCategories.map((item) => item.name);
  };

  createIncomeCategory = async (incomeCategory: CategoryRequest): Promise<void> => {
    await CategoryService.createIncomeCategory(incomeCategory);
    this.addNewIncomeCategory(incomeCategory.accountbookId);
  };

  @action
  addNewIncomeCategory = (accountbookId: number): void => {
    this.updateIncomeCategories(accountbookId);
  };

  createExpenditureCategory = async (expenditureCategory: CategoryRequest): Promise<void> => {
    await CategoryService.createExpenditureCategory(expenditureCategory);
    this.addNewExpenditureCategory(expenditureCategory.accountbookId);
  };

  @action
  addNewExpenditureCategory = (accountbookId: number): void => {
    this.updateExpenditureCategories(accountbookId);
    // this.expenditureCategories = [...this.expenditureCategories, expenditureCategory];
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
