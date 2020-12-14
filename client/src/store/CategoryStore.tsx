import { observable, action, makeObservable, computed, flow } from 'mobx';
import Category, { CategoryRequest } from '../types/category';
import RootStore from './RootStore';
import CategoryService from '../services/category';
import Options from '../types/dropdownOptions';
import socket, { event } from '../socket';

export default class CategoryStore {
  rootStore: RootStore;

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
    this.incomeCategoryNames = category.map((item) => item.name);
  };

  @action
  changeExpenditureCategories = (category: Category[]): void => {
    this.expenditureCategories = category;
    this.expenditureCategoryNames = category.map((item) => item.name);
  };

  updateIncomeCategories = flow(function* (this: CategoryStore, id: number) {
    const generator = CategoryService.getIncomeCategoryById(id);
    const { value: cachedValue } = yield generator.next();
    if (cachedValue !== undefined) {
      this.changeIncomeCategories(cachedValue);
    }
    const { value: refreshedValue } = yield generator.next();
    this.changeIncomeCategories(refreshedValue);
  });

  updateExpenditureCategories = flow(function* (this: CategoryStore, id: number) {
    const generator = CategoryService.getExpenditureCategoryById(id);
    const { value: cachedValue } = yield generator.next();
    if (cachedValue !== undefined) {
      this.changeExpenditureCategories(cachedValue);
    }
    const { value: refreshedValue } = yield generator.next();
    this.changeExpenditureCategories(refreshedValue);
  });

  createIncomeCategory = async (incomeCategory: CategoryRequest): Promise<void> => {
    const createdIncomeCategory = await CategoryService.createIncomeCategory(incomeCategory);
    this.addNewIncomeCategory(createdIncomeCategory);
  };

  @action
  addNewIncomeCategory = (incomeCategory: Category): void => {
    this.incomeCategories = [...this.incomeCategories, incomeCategory];
    this.incomeCategoryNames = this.incomeCategories.map((item) => item.name);
    socket.emit(event.UPDATE_INCOME_CATEGORIES, this.rootStore.accountbookStore.currentAccountbookId);
  };

  createExpenditureCategory = async (expenditureCategory: CategoryRequest): Promise<void> => {
    const createdExpenditureCategory = await CategoryService.createExpenditureCategory(expenditureCategory);
    this.addNewExpenditureCategory(createdExpenditureCategory);
  };

  @action
  addNewExpenditureCategory = (expenditureCategory: Category): void => {
    this.expenditureCategories = [...this.expenditureCategories, expenditureCategory];
    this.expenditureCategoryNames = this.expenditureCategories.map((item) => item.name);
    socket.emit(event.UPDATE_EXPENDITURE_CATEGORIES, this.rootStore.accountbookStore.currentAccountbookId);
  };

  deleteIncomeCategory = async (incomeCategoryId: number): Promise<void> => {
    await CategoryService.deleteIncomeCategory(incomeCategoryId);
    this.deleteIncomeCategoryById(incomeCategoryId);
  };

  @action
  deleteIncomeCategoryById = (incomeCategoryId: number): void => {
    this.incomeCategories = this.incomeCategories.filter((item) => item.id !== incomeCategoryId);
    this.incomeCategoryNames = this.incomeCategories.map((item) => item.name);
    socket.emit(event.UPDATE_INCOME_CATEGORIES, this.rootStore.accountbookStore.currentAccountbookId);
  };

  deleteExpenditureCategory = async (expenditureCategoryId: number): Promise<void> => {
    await CategoryService.deleteExpenditureCategory(expenditureCategoryId);
    this.deleteExpenditureCategoryById(expenditureCategoryId);
  };

  @action
  deleteExpenditureCategoryById = (expenditureCategoryId: number): void => {
    this.expenditureCategories = this.expenditureCategories.filter((item) => item.id !== expenditureCategoryId);
    this.expenditureCategoryNames = this.expenditureCategories.map((item) => item.name);
    socket.emit(event.UPDATE_EXPENDITURE_CATEGORIES, this.rootStore.accountbookStore.currentAccountbookId);
  };

  updateIncomeCategory = async (category: CategoryRequest, incomeCategoryId: number): Promise<void> => {
    const updatedIncomeCategory = await CategoryService.updateIncomeCategory(category, incomeCategoryId);
    this.updateIncomeCategoryById(updatedIncomeCategory);
  };

  @action
  updateIncomeCategoryById = (incomeCategory: Category): void => {
    this.incomeCategories = this.incomeCategories.map((item) =>
      item.id === incomeCategory.id ? incomeCategory : item,
    );
    this.incomeCategoryNames = this.incomeCategories.map((item) => item.name);
    socket.emit(event.UPDATE_INCOME_CATEGORIES, this.rootStore.accountbookStore.currentAccountbookId);
  };

  updateExpenditureCategory = async (category: CategoryRequest, expenditureCategoryId: number): Promise<void> => {
    const updatedExpenditureCategory = await CategoryService.updateExpenditureCategory(category, expenditureCategoryId);
    this.updateExpenditureCategoryById(updatedExpenditureCategory);
  };

  @action
  updateExpenditureCategoryById = (expenditureCategory: Category): void => {
    this.expenditureCategories = this.expenditureCategories.map((item) =>
      item.id === expenditureCategory.id ? expenditureCategory : item,
    );
    this.expenditureCategoryNames = this.expenditureCategories.map((item) => item.name);
    socket.emit(event.UPDATE_EXPENDITURE_CATEGORIES, this.rootStore.accountbookStore.currentAccountbookId);
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
