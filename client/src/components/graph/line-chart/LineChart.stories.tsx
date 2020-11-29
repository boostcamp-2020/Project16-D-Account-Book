import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import {
  fullTransaction,
  duplicatedTransaction,
  lackedTransaction,
} from '../../../__dummy-data__/components/graph/dummyTransaction';

export default {
  component: LineChart,
  title: 'LineChart',
};

const Medium = styled.div`
  width: 700px;
`;

export const LineChartSmall: React.FC = () => {
  return (
    <Medium>
      <LineChart transactions={fullTransaction} />
    </Medium>
  );
};

export const LineChartManSamll: React.FC = () => {
  return (
    <Medium>
      <LineChart transactions={duplicatedTransaction} />
    </Medium>
  );
};

export const LineChartLackedTransaction: React.FC = () => {
  return (
    <Medium>
      <LineChart transactions={lackedTransaction} />
    </Medium>
  );
};

export const LineChartOne: React.FC = () => {
  return (
    <Medium>
      <LineChart transactions={[{ date: new Date(), value: 10000000000000 }]} />
    </Medium>
  );
};
