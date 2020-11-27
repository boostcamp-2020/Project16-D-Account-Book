import React from 'react';
import SmallAccountbookItem from './SmallAccountbookItem';

export default {
  title: 'small-accountbook-item/SmallAccountbookItem',
  component: SmallAccountbookItem,
};

export const FirstSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem id={1} bgColor={'#3498DB'} />;
};

export const SecondSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem id={2} bgColor={'#2ecc70'} />;
};

export const ThirdSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem id={3} bgColor={'#f1c40f'} />;
};
