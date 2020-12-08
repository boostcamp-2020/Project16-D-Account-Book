import instance from '../api/axios';
import { getFormattedDate } from '../utils/date';
import Income, { IncomeRequest } from '../types/income';
import Expenditure, { ExpenditureRequest } from '../types/expenditure';
import { getIncomeCategoriesHandler } from '../__dummy-data__/api/category/getIncome';

const transactionAPIAddress = {
  getTransactions: '/api/transactions',
  createIncome: 'api/transactions/income',
  createExpenditure: 'api/transactions/expenditure',
  //newer
  pathIncome: '/api/transactions/income',
  patchExpenditure: '/api/transactions/expenditure',
  deleteIncome: '/api/transactions/income',
  deleteExpenditure: '/api/transactions/expenditure',
};

export default {
  getTransactions: async (
    accountbookId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<Array<Income | Expenditure>> => {
    const formattedStartDate = getFormattedDate({ date: startDate, format: '.' });
    const foramttedEndDate = getFormattedDate({ date: endDate, format: '.' });

    const response = await instance.get(transactionAPIAddress.getTransactions, {
      params: {
        accountbook_id: accountbookId,
        start_date: formattedStartDate,
        end_date: foramttedEndDate,
      },
    });
    return response.data;
  },

  createIncome: async (income: IncomeRequest): Promise<Income> => {
    const response = await instance.post(transactionAPIAddress.createIncome, income);
    return response.data;
  },

  createExpenditure: async (expenditure: ExpenditureRequest): Promise<Expenditure> => {
    const response = await instance.post(transactionAPIAddress.createExpenditure, expenditure);
    return response.data;
  },

  deleteIncome: async (incomeId: number): Promise<number> => {
    try {
      const response = await instance.delete(transactionAPIAddress.deleteIncome + `/${incomeId}`);
      return incomeId;
    } catch (e) {
      throw new Error('정상적으로 삭제되지 않았습니다.');
    }
  },
  deleteExpenditure: async (expenditureId: number): Promise<number> => {
    try {
      const response = await instance.delete(transactionAPIAddress.deleteExpenditure + `/${expenditureId}`);
      return expenditureId;
    } catch (e) {
      throw new Error('정상적으로 삭제되지 않았습니다.');
    }
  },
};
