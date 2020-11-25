import { Income } from '../components/transaction-item/TransactionItem.stories';
import Expenditure from './expenditure';

export default interface Income {
  id: number;
  amount: number;
  content: string;
  date: Date;
  memo: string;
}

export const isIncome = (transaction: Income | Expenditure): transaction is Income => {
  return (transaction as Income).content !== undefined;
};
