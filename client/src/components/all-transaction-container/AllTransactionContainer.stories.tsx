import React from 'react';
import AllTransactionCotainer from './AllTransactionContainer';
import { transactions } from '../../__dummy-data__/components/transactions/dummyData';
import Styled from 'styled-components';

export default {
  title: 'all-transaction-container/AllTransactionContainer',
  component: AllTransactionCotainer,
};

const Wrapper = Styled.div`
  margin: 0 auto;
  width: 70%;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Default = (): JSX.Element => {
  return <AllTransactionCotainer transactions={transactions} />;
};

export const applyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <AllTransactionCotainer transactions={transactions} />
    </Wrapper>
  );
};
