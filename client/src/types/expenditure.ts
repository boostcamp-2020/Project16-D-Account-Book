import Category from './category';
import Account from './account';

export default interface Expenditure {
  id: number;
  amount: number;
  place: string;
  date: Date;
  memo: string;
  category: Category;
  account: Account;
}
