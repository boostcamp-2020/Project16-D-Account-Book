import { rest } from 'msw';
const incomes = [
  {
    id: 1,
    name: '타행이체',
    color: 'tomato',
  },
  {
    id: 2,
    name: '중고판매',
    color: 'dodgerblue',
  },
  {
    id: 3,
    name: '급여',
    color: 'red',
  },
  {
    id: 4,
    name: '용돈',
    color: 'blue',
  },
  {
    id: 5,
    name: '사업수입',
    color: 'green',
  },
  {
    id: 6,
    name: '금융수입',
    color: 'silver',
  },
];

export const getIncomeCategoriesHandler = rest.get(
  process.env.REACT_APP_BASE_URL + '/api/categories/income',
  (req, res, ctx) => {
    return res(ctx.json(incomes));
  },
);

export default incomes;
