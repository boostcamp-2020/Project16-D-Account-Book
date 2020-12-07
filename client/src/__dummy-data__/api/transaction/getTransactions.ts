import { rest } from 'msw';
const transactions = [
  {
    id: 1,
    amount: 7500,
    place: '맘스터치',
    date: '2020-11-30T15:00:00.000Z',
    memo: null,
    category: {
      id: 3,
      name: '경조사',
      color: 'red',
    },
    account: {
      id: 1,
      name: '삼성카드',
      color: 'tomato',
    },
  },
];

export const getTransactionsHandler = rest.get(
  process.env.REACT_APP_BASE_URL + '/api/transactions',
  (req, res, ctx) => {
    return res(ctx.json(transactions));
  },
);

export default transactions;
