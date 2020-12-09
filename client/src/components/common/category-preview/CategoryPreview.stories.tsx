import React, { useState } from 'react';
import CategoryPreview from './CategoryPreview';

export default {
  title: 'category-preview/CategoryPreview',
  component: CategoryPreview,
};

export const Default = (): JSX.Element => {
  const [inputColor, setInputColor] = useState<string>('#000000');
  const name = '카테고리1';

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return <CategoryPreview name={name} color={inputColor} onChange={onChange} />;
};
