import React from 'react';
import InputText from './InputText';
import Select, { Options } from './Select';
import dummyOptions from '../../__dummy-data__/components/inputs/dummyOptions';
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

export const SelectDefault: React.FC = () => {
  return <Select options={dummyOptions} defaultValue={'스토리북'} showDropDown={false} />;
};

export const SmallSelect: React.FC = () => {
  return (
    <div
      style={{
        width: '400px',
      }}
    >
      <Select options={dummyOptions} defaultValue={'스토리북'} showDropDown={false} />
      <Select options={dummyOptions} defaultValue={'스토리북'} showDropDown={true} />
    </div>
  );
};
