import React, { useState } from 'react';
import Preview from './Preview';

export default {
  title: 'Preview',
};

export const PreviewDefault: React.FC = () => {
  const [inputColor, setInputColor] = useState<string>('black');
  const title = '가계부 1';
  const description = '부스트캠프 커넥트 재단 가계부';

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return <Preview title={title} description={description} color={inputColor} onChange={onChange} />;
};
