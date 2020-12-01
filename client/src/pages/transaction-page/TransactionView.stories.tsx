import React from 'react';
import TransactionPage from './TransactionPage';
import TransactionView from './TransactionView';
import { RootProvider } from '../../store/RootStore';

export default {
  title: 'pages/transaction-page/TransactionPage',
  component: TransactionPage,
};

export const Default: React.FC = () => {
  return (
    <RootProvider>
      <TransactionView accountbookId={1} query={null} />
    </RootProvider>
  );
};
