import React from 'react';
import DayTransactionCotainer from './DayTransactionContainer';
import { transactions } from '../../__dummy-data__/dummyData';

export default {
  title: 'day-transaction-container/DayTransactionContainer',
  component: DayTransactionCotainer,
};

export const Default = (): JSX.Element => {
  return <DayTransactionCotainer transactions={transactions} />;
};
