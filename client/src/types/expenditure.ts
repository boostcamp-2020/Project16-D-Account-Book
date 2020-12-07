import Category from './category';
import Account from './account';

export interface Expenditure {
  id: number;
  amount: number;
  place: string;
  date: Date;
  memo: string;
  category: Category;
  account: Account;
}

export default Expenditure;
