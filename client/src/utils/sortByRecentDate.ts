import { Income } from '../types/income';
import { Expenditure } from '../types/expenditure';

export const sortByRecentDate = (transactions: Array<Income | Expenditure>): Array<Income | Expenditure> =>
  transactions.slice().sort((transaction1, transaction2) => {
    return new Date(transaction2.date).getTime() - new Date(transaction1.date).getTime();
  });
