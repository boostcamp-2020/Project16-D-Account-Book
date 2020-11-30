import React from 'react';
import { DateProvider } from '../../store/DateStore';
import { TransactionProvider } from '../../store/TransactionStore';
import { match } from 'react-router-dom';
import TransactionView from './TransactionView';

interface Props {
  match: match<{ id: string }>;
}

const TransactionPage: React.FC<Props> = ({ match }: Props) => {
  return (
    <DateProvider>
      <TransactionProvider>
        <TransactionView accountbookId={Number(match.params.id)} />
      </TransactionProvider>
    </DateProvider>
  );
};

export default TransactionPage;
