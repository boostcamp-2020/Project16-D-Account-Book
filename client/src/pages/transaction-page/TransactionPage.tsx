import React from 'react';
import { match } from 'react-router-dom';
import TransactionView from './TransactionView';

interface Props {
  match: match<{ id: string }>;
}

const TransactionPage: React.FC<Props> = ({ match }: Props) => {
  return <TransactionView accountbookId={Number(match.params.id)} />;
};

export default TransactionPage;
