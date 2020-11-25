const category1 = { id: 1, name: '급여', color: '#ffff00' };
const category2 = { id: 2, name: '생활', color: '#000000' };

const account1 = { id: 1, name: '농협', color: '#ff1234' };
const account2 = { id: 2, name: '현금', color: 'a7a7a7' };

export const income = {
  id: 1,
  amount: 30000,
  content: '월급',
  date: new Date(),
  memo: 'memomemomemomemomemomemomemomemomemomemomemomemomemomemo',
  category: category1,
  account: account1,
};

export const expenditure = {
  id: 1,
  amount: 1500,
  place: 'GS25편의점',
  date: new Date(),
  memo: '편의점 라면',
  category: category2,
  account: account2,
};

export const transactions = [income, expenditure];
