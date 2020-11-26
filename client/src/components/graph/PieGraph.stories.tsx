import React from 'react';
import PieGraphSVG, { PieGraphProps } from './PieGraph';

interface StoriesDefault {
  component: React.ReactNode;
  title: string;
}

export default {
  component: PieGraphSVG,
  title: 'PieGraphSVG',
} as StoriesDefault;

export const PieGraphDefault = (): JSX.Element => {
  const pieProps: PieGraphProps = {
    transactionData: [
      { title: '상품', color: 'green', ratio: 20 },
      { title: '토마토', color: 'tomato', ratio: 30 },
      { title: '물', color: 'blue', ratio: 10 },
      { title: '닷져블루', color: 'dodgerblue', ratio: 40 },
    ],
  };
  return <PieGraphSVG transactionData={pieProps.transactionData} />;
};

export const SmallSVG = (): React.ReactNode => {
  const pieProps: PieGraphProps = {
    transactionData: [
      { title: '상품', color: 'green', ratio: 20 },
      { title: '토마토', color: 'tomato', ratio: 30 },
      { title: '물', color: 'blue', ratio: 10 },
      { title: '닷져블루', color: 'dodgerblue', ratio: 40 },
    ],
  };

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
      }}
    >
      <PieGraphSVG {...pieProps} />
    </div>
  );
};
