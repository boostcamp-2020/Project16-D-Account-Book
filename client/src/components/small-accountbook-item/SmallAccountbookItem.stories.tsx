import React from 'react';
import SmallAccountbookItem from './SmallAccountbookItem';

export default {
  title: '작은 가계부 아이템',
  component: SmallAccountbookItem,
};

export const FirstSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem text={'1'} bgColor={'#3498DB'} />;
};

export const SecondSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem text={'2'} bgColor={'#2ecc70'} />;
};

export const ThirdSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem text={'3'} bgColor={'#f1c40f'} />;
};
