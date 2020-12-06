import Expenditure from './expenditure';
import Category from './category';
import Account from './account';

export default interface Income {
  id: number;
  amount: number;
  content: string;
  date: Date | string;
  memo: string;
  category: Category;
  account: Account;
}

export interface IncomeRequest {
  accountbookId: number;
  incomeCategoryId: number;
  accountId: number;
  amount: number;
  content: string;
  date: string;
  memo: string;
}

export const isIncome = (transaction: Income | Expenditure): transaction is Income => {
  return (transaction as Income).content !== undefined;
};
