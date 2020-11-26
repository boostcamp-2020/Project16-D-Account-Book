import React from 'react';
import DayTransactionCotainer from './DayTransactionContainer';
import { transactions } from '../../../utils/dummyData';

export default {
  title: 'transactions/day-transaction-container/DayTransactionContainer',
  component: DayTransactionCotainer,
};

export const Default = (): JSX.Element => {
  return <DayTransactionCotainer transactions={transactions} />;
};
