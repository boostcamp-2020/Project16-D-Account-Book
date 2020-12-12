import Category, { CategoryRequest } from '../types/category';
import instance from '../api/axios';
import querystring from 'querystring';

const categoryAPIAddress = {
  getIncome: '/api/categories/income',
  getExpenditure: '/api/categories/expenditure',
  createIncome: '/api/categories/income',
  createExpenditure: '/api/categories/expenditure',
  deleteIncomeCategory: '/api/categories/income',
  deleteExpenditureCategory: '/api/categories/expenditure',
  updateIncomeCategory: '/api/categories/income',
  updateExpenditureCategory: '/api/categories/expenditure',
};

const IncomeCategory = new Map();
const ExpenditureCategory = new Map();

export default {
  getIncomeCategoryById: async function* (id: number): AsyncGenerator<Category[]> {
    const requestURL =
      categoryAPIAddress.getIncome +
      querystring.stringify({
        accountbook_id: id,
      });
    //캐시 리턴
    yield IncomeCategory.get(requestURL);

    const response = await instance.get(categoryAPIAddress.getIncome, {
      params: {
        accountbook_id: id,
      },
    });

    //캐시 업데이트
    IncomeCategory.set(requestURL, response.data);

    return response.data;
  },

  getExpenditureCategoryById: async function* (id: number): AsyncGenerator<Category[]> {
    const requestURL =
      categoryAPIAddress.getExpenditure +
      querystring.stringify({
        accountbook_id: id,
      });
    //캐시 리턴
    yield ExpenditureCategory.get(requestURL);

    const response = await instance.get(categoryAPIAddress.getExpenditure, {
      params: {
        accountbook_id: id,
      },
    });

    //캐시 업데이트
    ExpenditureCategory.set(requestURL, response.data);

    return response.data;
  },
  createIncomeCategory: async (incomeCategory: CategoryRequest): Promise<Category> => {
    const response = await instance.post(categoryAPIAddress.createIncome, incomeCategory);
    return response.data;
  },
  createExpenditureCategory: async (expenditureCategory: CategoryRequest): Promise<Category> => {
    const response = await instance.post(categoryAPIAddress.createExpenditure, expenditureCategory);
    return response.data;
  },
  deleteIncomeCategory: async (incomeCategoryId: number): Promise<number> => {
    try {
      await instance.delete(categoryAPIAddress.deleteIncomeCategory + `/${incomeCategoryId}`);
      return incomeCategoryId;
    } catch {
      throw new Error('삭제 실패');
    }
  },
  deleteExpenditureCategory: async (expenditureCategoryId: number): Promise<number> => {
    try {
      await instance.delete(categoryAPIAddress.deleteExpenditureCategory + `/${expenditureCategoryId}`);
      return expenditureCategoryId;
    } catch {
      throw new Error('삭제 실패');
    }
  },
  updateIncomeCategory: async (incomeCategory: CategoryRequest, incomeCategoryId: number): Promise<Category> => {
    try {
      const response = await instance.patch(
        categoryAPIAddress.updateIncomeCategory + `/${incomeCategoryId}`,
        incomeCategory,
      );
      return response.data;
    } catch {
      throw new Error('수정 실패');
    }
  },
  updateExpenditureCategory: async (
    expenditureCategory: CategoryRequest,
    expenditureCategoryId: number,
  ): Promise<Category> => {
    try {
      const response = await instance.patch(
        categoryAPIAddress.updateExpenditureCategory + `/${expenditureCategoryId}`,
        expenditureCategory,
      );
      return response.data;
    } catch {
      throw new Error('수정 실패');
    }
  },
};
