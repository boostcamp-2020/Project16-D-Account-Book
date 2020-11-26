import React from 'react';
import TransactionItem from './TransactionItem';
import { incomes, expenditures } from '../../../utils/dummyData';

export default {
  title: 'transactions/transaction-item/transactionItem',
  component: TransactionItem,
};

export const Income = (): JSX.Element => {
  return <TransactionItem transaction={incomes[0]} />;
};

export const Expenditure = (): JSX.Element => {
  return <TransactionItem transaction={expenditures[0]} />;
};