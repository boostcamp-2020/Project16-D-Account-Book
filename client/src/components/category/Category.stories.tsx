import React from 'react';
import Category from './Category';

export default {
  title: 'category/Category',
  component: Category,
};

export const WhiteTextCategory = (): JSX.Element => {
  return <Category text={'영화'} bgColor={'#000000'} />;
};

export const BlackTextCategory = (): JSX.Element => {
  return <Category text={'쇼핑/뷰티'} bgColor={'#E0F8EC'} />;
};

export const LongTextCategory = (): JSX.Element => {
  return <Category text={'네이버부스트캠프'} bgColor={'#E0F8EC'} />;
};
