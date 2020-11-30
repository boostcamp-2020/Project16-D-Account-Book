import api from '../api/axios';
import { getFormattedDate } from '../utils/date';
import { AxiosResponse } from 'axios';
import Income from '../types/income';
import Expenditure from '../types/expenditure';

export const getTransactions = async (
  accountbookId: number,
  startDate: Date,
  endDate: Date,
): Promise<Array<Income | Expenditure>> => {
  const formattedStartDate = getFormattedDate({ date: startDate, format: '.' });
  const foramttedEndDate = getFormattedDate({ date: endDate, format: '.' });
  return await api.get(
    `/api/transactions?accountbook_id=${accountbookId}&start_date=${formattedStartDate}&end_date=${foramttedEndDate}`,
  );
};
