import Expenditure from './expenditure';
import Category from './category';
import Account from './account';

export interface Income {
  id: number;
  amount: number;
  content: string;
  date: Date;
  memo: string;
  category: Category;
  account: Account;
}

export const isIncome = (transaction: Income | Expenditure): transaction is Income => {
  return (transaction as Income).content !== undefined;
};

export default Income;
