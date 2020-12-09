import React from 'react';
import AddCategoryButton from './AddCategoryButton';

export default {
  title: 'add-category-button/AddCategoryButton',
  component: AddCategoryButton,
};

export const AddCategoryButtonDefault = (): JSX.Element => {
  const onClick = (): void => {
    // Props가 없어서 발생하는 오류 때문에 임의로 만든 함수
  };
  return <AddCategoryButton onClick={onClick} />;
};
