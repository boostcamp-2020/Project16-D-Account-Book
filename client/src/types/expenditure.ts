import Category from './category';
import Account from './account';

export interface Expenditure {
  id: number;
  amount: number;
  place: string;
  date: Date | string;
  memo: string;
  category: Category;
  account: Account;
}

export interface ExpenditureRequest {
  accountbookId: number;
  expenditureCategoryId: number;
  accountId: number;
  amount: number;
  place: string;
  date: string;
  memo: string;
}

export default Expenditure;
