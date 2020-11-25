import React from 'react';
import Styled from 'styled-components';
import Income from '../../types/income';
import Expenditure from '../../types/expenditure';

const Container = Styled.div`
`;

interface Props {
  month: number;
  day: number;
  transactions: Array<Income | Expenditure>;
}

const DayTransactionComponent = ({ month, day, transactions }: Props): JSX.Element => {
  return <Container></Container>;
};

export default DayTransactionComponent;
