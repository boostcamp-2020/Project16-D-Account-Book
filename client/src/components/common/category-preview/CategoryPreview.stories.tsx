import React, { useState } from 'react';
import CategoryPreview from './CategoryPreview';

export default {
  title: 'category-preview/CategoryPreview',
  component: CategoryPreview,
};

export const Default = (): JSX.Element => {
  const [inputColor, setInputColor] = useState<string>('black');
  const title = '카테고리1';

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return <CategoryPreview title={title} color={inputColor} onChange={onChange} />;
};
