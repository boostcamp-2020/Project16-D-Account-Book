import React from 'react';
import SmallAccountbookItem from './SmallAccountbookItem';

export default {
  title: 'small-accountbook-item/SmallAccountbookItem',
  component: SmallAccountbookItem,
};

export const FirstSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem title={'가계부1'} show={true} bgColor={'#3498DB'} description={'가계부1 설명'} />;
};

export const SecondSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem title={'가계부2'} show={true} bgColor={'#2ecc70'} description={'가계부1 설명'} />;
};

export const ThirdSmallAccountbookItem = (): JSX.Element => {
  return <SmallAccountbookItem title={'가계부3'} show={true} bgColor={'#f1c40f'} description={'가계부1 설명'} />;
};
