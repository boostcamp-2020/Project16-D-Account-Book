import React from 'react';
import TransactionItem from './TransactionItem';
import { income, expenditure } from '../../utils/sampleData';

export default {
  title: 'transaction-item/transactionItem',
  component: TransactionItem,
};

export const Income = (): JSX.Element => {
  return <TransactionItem transaction={income} />;
};

export const Expenditure = (): JSX.Element => {
  return <TransactionItem transaction={expenditure} />;
};
