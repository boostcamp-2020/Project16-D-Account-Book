import React from 'react';
import FilterOption from './FilterOption';
import styled from 'styled-components';

export default {
  title: 'transaction-page/FilterOption',
};

const Wrapper = styled.div`
  width: 220px;
`;

const query = {
  startDate: '2020.10.01',
  endDate: '2020.12.01',
  account: '현금+농협',
  incomeCategory: '급여',
  expenditureCategory: '쇼핑',
};

export const Default = (): JSX.Element => {
  return <FilterOption query={query} accountbookId={1} />;
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <FilterOption query={query} accountbookId={1} />
    </Wrapper>
  );
};
