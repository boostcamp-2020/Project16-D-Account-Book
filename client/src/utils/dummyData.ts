const categories = [
  { id: 1, name: '급여', color: '#ffff00' },
  { id: 2, name: '생활', color: '#000000' },
  { id: 3, name: '금융수입', color: '#ffa8d6' },
];

const accounts = [
  { id: 1, name: '농협', color: '#ff1234' },
  { id: 2, name: '현금', color: 'a7a7a7' },
];

export const incomes = [
  {
    id: 1,
    amount: 30000,
    content: '월급',
    date: new Date(),
    memo: 'memomemomemomemomemomemomemomemomemomemomemomemomemomemo',
    category: categories[0],
    account: accounts[0],
  },
  {
    id: 2,
    amount: 10000,
    content: '주식투자',
    date: new Date('2020-11-22'),
    memo: '삼성주식 떡상',
    category: categories[2],
    account: accounts[0],
  },
];

export const expenditures = [
  {
    id: 1,
    amount: 1500,
    place: 'GS25편의점',
    date: new Date(),
    memo: '편의점 라면',
    category: categories[1],
    account: accounts[1],
  },
  {
    id: 2,
    amount: 1200000,
    place: '하이마트',
    date: new Date('2020-11-22'),
    memo: '김치냉장고 구매',
    category: categories[1],
    account: accounts[0],
  },
];

export const smallAccountbookitems = [
  {
    id: 1,
    color: '#3498DB',
  },
  {
    id: 2,
    color: '#2ecc70',
  },
  {
    id: 3,
    color: '#f1c40f',
  },
  {
    id: 4,
    color: '#dfa39f',
  },
  {
    id: 5,
    color: '#d3fda8',
  },
  {
    id: 6,
    color: 'black',
  },
];

export const transactions = [...incomes, ...expenditures];
