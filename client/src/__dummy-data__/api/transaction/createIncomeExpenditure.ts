import { rest } from 'msw';
export const createIncomeRequestBody = {
  accountbookId: 1,
  incomeCategoryId: 1,
  accountId: 1,
  amount: 5000,
  content: '안녕하세요',
  date: '2020-12-04',
  memo: '반갑습니다.',
};

export const createIncomeResponse = {
  id: 23,
  amount: 5000,
  content: '안녕하세요',
  date: '2020-12-04T00:00:00.000Z',
  memo: '반갑습니다.',
  category: {
    id: 1,
    name: '타행이체',
    color: '#1E90FF',
  },
  account: {
    id: 1,
    name: '삼성카드',
    color: '#1E90FF',
  },
};

export const createExpenditureRequestBody = {
  accountbookId: 1,
  incomeCategoryId: 1,
  accountId: 1,
  amount: 5000,
  place: '안녕하세요',
  date: '2020-12-04',
  memo: '반갑습니다.',
};

export const createExpenditureResponse = {
  id: 16,
  amount: 5000,
  place: '장소',
  date: '2020-12-04T00:00:00.000Z',
  memo: '반갑습니다.',
  category: {
    id: 1,
    name: '식사',
    color: '#1E90FF',
  },
  account: {
    id: 1,
    name: '삼성카드',
    color: '#1E90FF',
  },
};

export const createIncomeHandler = rest.post(
  process.env.REACT_APP_BASE_URL + '/api/transactions/income',
  (req, res, ctx) => {
    return res(ctx.json(createIncomeResponse));
  },
);

export const createExpenditureHandler = rest.post(
  process.env.REACT_APP_BASE_URL + '/api/transactions/expenditure',
  (req, res, ctx) => {
    return res(ctx.json(createExpenditureResponse));
  },
);
