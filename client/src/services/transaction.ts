import instance from '../api/axios';
import { getFormattedDate } from '../utils/date';
import Income, { IncomeRequest } from '../types/income';
import Expenditure, { ExpenditureRequest } from '../types/expenditure';

const transactionAPIAddress = {
  getTransactions: '/api/transactions',
  createIncome: 'api/transactions/income',
  createExpenditure: 'api/transactions/expenditure',
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
};
