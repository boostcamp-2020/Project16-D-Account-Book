import React, { useState } from 'react';
import InputText from './InputText/InputText';
import Select, { Options } from './Select/Select';
import InputDropDown from './InputDropDown/InputDropDown';
import styled from 'styled-components';
import dummyOptions from '../../__dummy-data__/components/inputs/dummyOptions';
import { stat } from 'fs';

const SmallDiv = styled.div`
  width: 300px;
`;
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

export const SmallInputDropDownSingle: React.FC = () => {
  return (
    <SmallDiv>
      <InputDropDown items={dummyOptions} selectValue={['optionLabel1', 'optionLabel5']} header="스토리북" />
    </SmallDiv>
  );
};

export const SmallInputDropDownMulti: React.FC = () => {
  return (
    <SmallDiv>
      <InputDropDown
        items={dummyOptions}
        selectValue={['optionLabel1', 'optionLabel5']}
        header="스토리북"
        multi={true}
      />
    </SmallDiv>
  );
};

export const InputDropDownSingleUsage: React.FC = () => {
  const [select, setSelect] = useState<string>('아무거나 선택하세요');
  const onChange = (target: string) => {
    setSelect(target);
  };
  return (
    <SmallDiv>
      <InputDropDown items={dummyOptions} selectValue={[select]} header={select} onChange={onChange} />
    </SmallDiv>
  );
};

export const InputDropDownMultiUsage: React.FC = () => {
  const [select, setSelect] = useState<Set<string>>(new Set<string>());
  const header = Array.from(select).join('') === '' ? '아무거나 선택하세요' : Array.from(select).join('');
  console.log(select);
  const onChange = (target: string) => {
    setSelect((state) => {
      state.add(target);
      return new Set(Array.from(state));
    });
  };

  return (
    <SmallDiv>
      <InputDropDown items={dummyOptions} selectValue={[...select]} header={header} multi={true} onChange={onChange} />
    </SmallDiv>
  );
};
