import dummyOptions from '../inputs/dummyOptions';
import { ITransactionForm, ITransactionFormChange } from '../../../types/TransactionForm';
export const inputs = {
  classify: true,
  price: 1000,
  categories: {
    placeholder: '카테고리',
    items: dummyOptions,
  },
  accounts: {
    placeholder: '결제수단',
    items: dummyOptions,
  },
  date: '2020-12-01T05:33:50',
  content: '콘텐츠입니다.',
  memo: '메모입니다.',
};

export const createDummyTransactionFormReducerState = (): ITransactionForm => {
  return {
    classify: true,
    price: 1000,
    categories: '',
    accounts: '',
    date: '2020-12-01T05:33:50',
    content: '콘텐츠입니다.',
    memo: '메모입니다.',
  };
};

export const changes: ITransactionFormChange = {
  price: (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  },
  classify: {
    income: (): void => {
      //
    },
    expenditure: (): void => {
      //
    },
  },
  categories: (change: string): void => {
    console.log(change);
    //
  },
  accounts: (change: string): void => {
    console.log(change);
  },
  date: (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    //
  },
};
