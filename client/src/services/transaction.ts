import instance from '../api/axios';
import { getFormattedDate } from '../utils/date';
import Income from '../types/income';
import Expenditure from '../types/expenditure';

const transactionAPIAddress = {
  getTransactions: '/api/transactions',
};

export default {
  getTransactions: async (
    accountbookId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<Array<Income | Expenditure>> => {
    const formattedStartDate = getFormattedDate({ date: startDate, format: '.' });
    const foramttedEndDate = getFormattedDate({ date: endDate, format: '.' });
    return await instance.get(transactionAPIAddress.getTransactions, {
      params: {
        accountbook_id: accountbookId,
        start_date: formattedStartDate,
        end_date: foramttedEndDate,
      },
    });
  },
};
