import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import { Location } from 'history';
import TransactionView from './TransactionView';
import styled from 'styled-components';
import queryString from 'query-string';
import useStore from '../../hook/use-store/useStore';

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
  const { rootStore } = useStore();
  const query = location.search ? queryString.parse(location.search) : null;
  useEffect(() => {
    rootStore.accountStore.updateAccounts(Number(match.params.id));
    rootStore.categoryStore.updateIncomeCategories(Number(match.params.id));
    rootStore.categoryStore.updateExpenditureCategories(Number(match.params.id));
  }, []);

  return (
    <PageWrapper>
      <TransactionView accountbookId={Number(match.params.id)} query={query} />
    </PageWrapper>
  );
};

export default TransactionPage;
