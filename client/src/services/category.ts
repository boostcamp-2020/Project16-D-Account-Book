import Category from '../types/category';
import instance from '../api/axios';

const categoryAPIAddress = {
  getIncome: '/api/categories/income',
  getExpenditure: '/api/categories/expenditure',
};

export default {
  getIncomeCategoryById: async (id: number): Promise<Category[]> => {
    const response = await instance.get(categoryAPIAddress.getIncome, {
      params: {
        accountbook_id: id,
      },
    });
    return response.data;
  },
  getExpenditureCategoryById: async (id: number): Promise<Category[]> => {
    const response = await instance.get(categoryAPIAddress.getExpenditure, {
      params: {
        accountbook_id: id,
      },
    });
    return response.data;
  },
};
