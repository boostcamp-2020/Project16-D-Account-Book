import React from 'react';
import Category from './Category';

export default {
  title: 'category/Category',
  component: Category,
};

export const WhiteTextCategory = (): JSX.Element => {
  return <Category id={1} name={'영화'} color={'#000000'} />;
};

export const BlackTextCategory = (): JSX.Element => {
  return <Category id={2} name={'쇼핑/뷰티'} color={'#E0F8EC'} />;
};

export const LongTextCategory = (): JSX.Element => {
  return <Category id={3} name={'네이버부스트캠프'} color={'#E0F8EC'} />;
};
