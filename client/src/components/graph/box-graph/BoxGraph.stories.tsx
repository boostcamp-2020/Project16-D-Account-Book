import React from 'react';
import BoxGraph from './BoxGraph';

export default {
  title: 'BoxGraph',
  component: BoxGraph,
};

export const BoxGraphDefault: React.FC = () => {
  const title = '식비';
  const ratio = 55.8;
  const value = 16740;
  const color = '#FF5959';
  return <BoxGraph title={title} ratio={ratio} value={value} color={color} />;
};
