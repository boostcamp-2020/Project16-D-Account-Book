import React from 'react';
import TransactionPage from './TransactionPage';
import { DateProvider } from '../../store/DateStore';
import { TransactionProvider } from '../../store/TransactionStore';

export default {
  title: 'pages/transaction-page/TransactionPage',
  component: TransactionPage,
};

export const Default: React.FC = () => {
  return (
    <TransactionProvider>
      <DateProvider>
        <TransactionPage />
      </DateProvider>
    </TransactionProvider>
  );
};
