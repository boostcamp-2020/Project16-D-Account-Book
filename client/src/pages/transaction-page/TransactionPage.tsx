import React from 'react';
import { match } from 'react-router-dom';
import { Location } from 'history';
import TransactionView from './TransactionView';
import styled from 'styled-components';
import queryString from 'query-string';

interface Props {
  match: match<{ id: string }>;
  location: Location;
}

const PageWrapper = styled.div`
  font-family: 'Spoqa Han Sans';
`;

interface Query {
  category: string | string[] | null;
}
const TransactionPage: React.FC<Props> = ({ match, location }: Props) => {
  const query = location.search ? queryString.parse(location.search) : null;
  return (
    <PageWrapper>
      <TransactionView accountbookId={Number(match.params.id)} query={query} />
    </PageWrapper>
  );
};

export default TransactionPage;
