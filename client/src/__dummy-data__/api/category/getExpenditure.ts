import { rest } from 'msw';
const expenditures = [
  {
    id: 1,
    name: '식사',
    color: 'tomato',
  },
  {
    id: 2,
    name: '생활',
    color: 'dodgerblue',
  },
  {
    id: 3,
    name: '경조사',
    color: 'red',
  },
  {
    id: 4,
    name: '교육',
    color: 'green',
  },
  {
    id: 5,
    name: '주거/통신',
    color: 'blue',
  },
  {
    id: 6,
    name: '술/유흥',
    color: 'yellow',
  },
  {
    id: 7,
    name: '문화/여가',
    color: 'lightgray',
  },
  {
    id: 8,
    name: '교통',
    color: 'silver',
  },
];

export const getExpenditureCategoriesHandler = rest.get(
  process.env.REACT_APP_BASE_URL + '/api/categories/expenditure',
  (req, res, ctx) => {
    return res(ctx.json(expenditures));
  },
);

export default expenditures;
