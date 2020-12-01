import React from 'react';
import { match } from 'react-router-dom';
import TransactionView from './TransactionView';
import styled from 'styled-components';

interface Props {
  match: match<{ id: string }>;
}

const PageWrapper = styled.div`
  font-family: 'Spoqa Han Sans';
`;

const TransactionPage: React.FC<Props> = ({ match }: Props) => {
  return (
    <PageWrapper>
      <TransactionView accountbookId={Number(match.params.id)} />
    </PageWrapper>
  );
};

export default TransactionPage;
