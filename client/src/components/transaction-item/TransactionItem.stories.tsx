import React from 'react';
import TransactionItem from './TransactionItem';

export default {
  title: 'transaction-item/transactionItem',
  component: TransactionItem,
};

const category1 = { name: '생활', color: '#ffff00' };
const category2 = { name: '급여', color: '#000000' };
const income = {
  id: 1,
  amount: 30000,
  content: '월급',
  date: new Date(),
  memo: 'memomemomemomemomemomemomemomemomemomemomemomemomemomemo',
};
const expenditure = {
  id: 1,
  amount: 1500,
  place: 'GS25편의점',
  date: new Date(),
  memo: '편의점 라면',
};

export const Income = (): JSX.Element => {
  return <TransactionItem category={category1} income={income} account={'현금'} isIncome={true} />;
};

export const Expenditure = (): JSX.Element => {
  return <TransactionItem category={category2} expenditure={expenditure} account={'현금'} isIncome={false} />;
};
