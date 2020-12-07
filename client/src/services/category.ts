import Category, { CategoryRequest } from '../types/category';
import instance from '../api/axios';
const categoryAPIAddress = {
  getIncome: '/api/categories/income',
  getExpenditure: '/api/categories/expenditure',
  createIncome: '/api/categories/income',
};

export default {
  getIncomeCategoryById: async (id: number): Promise<Category[]> => {
    return await instance.get(categoryAPIAddress.getIncome, {
      params: {
        accountbook_id: id,
      },
    });
  },
  getExpenditureCategoryById: async (id: number): Promise<Category[]> => {
    return await instance.get(categoryAPIAddress.getExpenditure, {
      params: {
        accountbook_id: id,
      },
    });
  },
  createIncome: async (incomeCategory: CategoryRequest): Promise<Category> => {
    return await instance.post(categoryAPIAddress.createIncome, incomeCategory);
  },
};
