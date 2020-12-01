import dummyOptions from '../inputs/dummyOptions';
export const inputs = {
  price: 1000,
  classify: true,
  categories: {
    placeholder: '카테고리',
    items: dummyOptions,
  },
  accounts: {
    placeholder: '결제수단',
    items: dummyOptions,
  },
  date: '',
};

export const changes = {
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
