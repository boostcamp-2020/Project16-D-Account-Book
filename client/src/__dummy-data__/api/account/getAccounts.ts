import { rest } from 'msw';
const accounts = [
  {
    id: 1,
    name: '삼성카드',
    color: 'tomato',
  },
  {
    id: 2,
    name: '국민카드',
    color: 'dodgerblue',
  },
  {
    id: 3,
    name: '농협카드',
    color: 'red',
  },
  {
    id: 4,
    name: '우리카드',
    color: 'blue',
  },
  {
    id: 5,
    name: '신한카드',
    color: 'green',
  },
];

export const getAccountsHandler = rest.get(process.env.REACT_APP_BASE_URL + '/api/accounts', (req, res, ctx) => {
  return res(ctx.json(accounts));
});

export default accounts;
