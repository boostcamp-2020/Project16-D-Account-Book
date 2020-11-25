import React from 'react';
import InputText from './InputText';

export default {
  title: 'Inputs',
};

export const InputTextDefault: React.FC = () => {
  const value = '';
  const onChange = () => {
    //pass
  };
  return <InputText placeholder={'기본값입니다.'} value={value} onChange={onChange} />;
};
