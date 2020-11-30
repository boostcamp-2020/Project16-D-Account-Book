import dummyOptions from '../inputs/dummyOptions';
export const inputs = {
  dateRange: {
    placeholder: '기간',
    items: dummyOptions,
  },
  startDate: '2020년 11월 12일',
  endDate: '2020년 11월 18일',
  payment: {
    placeholder: '결제수단',
    items: dummyOptions,
  },
  incomeCategories: {
    placeholder: '수입',
    items: dummyOptions,
  },
  expenditureCategories: {
    placeholder: '지출',
    items: dummyOptions,
  },
};
export const changes = {
  dateRage: (e: string): void => {
    console.log(e);
  },
  payment: (e: string): void => {
    console.log(e);
  },
  incomeCategories: (e: string[]): void => {
    console.log(e);
  },
  expenditureCategories: (e: string[]): void => {
    console.log(e);
  },
};
