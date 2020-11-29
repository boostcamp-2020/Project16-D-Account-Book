import React from 'react';
import DayTransactionCotainer from './DayTransactionContainer';
import { transactions } from '../../../../__dummy-data__/components/transactions/dummyData';

export default {
  title: 'transactions/day-transaction-container/DayTransactionContainer',
  component: DayTransactionCotainer,
};

export const Default = (): JSX.Element => {
  return <DayTransactionCotainer transactions={transactions} />;
};
