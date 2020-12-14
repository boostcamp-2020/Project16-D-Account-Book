import transactionService from '../../services/transaction';
import { Income } from '../../types/income';
import { Expenditure } from '../../types/expenditure';
import { getFirstDateOfNextMonth, getFirstDateOfPreviousMonth } from '../date';
import accountbook from '../../services/accountbook';
const getSWRGenerator = (
  accountbookId: number,
  startDate: Date,
  endDate: Date,
  beforeMonth: Date = getFirstDateOfPreviousMonth(startDate),
  afterMonth: Date = getFirstDateOfNextMonth(endDate),
): AsyncGenerator<(Income | Expenditure)[] | undefined, any, unknown> => {
  return transactionService.getTransactions(accountbookId, startDate, endDate, beforeMonth, afterMonth);
};

export default getSWRGenerator;
