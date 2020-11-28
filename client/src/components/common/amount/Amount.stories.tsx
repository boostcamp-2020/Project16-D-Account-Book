import React from 'react';
import Amount from './Amonut';
import styled from 'styled-components';

export default {
  title: 'common/amount/Amount',
  component: Amount,
};

const Wrapper = styled.div`
  width: 200px;
  border: 1px solid black;
`;

export const Expenditure = (): JSX.Element => {
  return <Amount text={'지출'} amount={30000} />;
};

export const Income = (): JSX.Element => {
  return <Amount text={'수입'} amount={300000} />;
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <Amount text={'수입'} amount={300000} />
    </Wrapper>
  );
};
