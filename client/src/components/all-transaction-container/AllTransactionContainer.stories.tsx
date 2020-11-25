import React from 'react';
import AllTransactionCotainer from './AllTransactionContainer';
import { transactions } from '../../utils/dummyData';

export default {
  title: 'all-transaction-container/AllTransactionContainer',
  component: AllTransactionCotainer,
};

export const Default = (): JSX.Element => {
  return <AllTransactionCotainer transactions={transactions} />;
};
