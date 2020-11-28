import React, { useState } from 'react';
import InputText from './input-text/InputText';
import styled from 'styled-components';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import MultiInputDropDown from './multi-input-dropdown/MultiInputDropdown';
import SingleInputDropDown from './single-input-dropdown/SingleInputDropdown';
import SelectPaymentMethod from './select-payment-method/SelectPaymentMethod';

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

export const InputDropDownDefault: React.FC = () => {
  return (
    <SmallDiv>
      <SingleInputDropDown placeholder={'Single'} items={dummyOptions} />
    </SmallDiv>
  );
};

export const MultiInputDropDownDefault: React.FC = () => {
  return (
    <SmallDiv>
      <MultiInputDropDown placeholder={'multi'} items={dummyOptions} />
    </SmallDiv>
  );
};

export const SelectPaymentMethodDefault: React.FC = () => {
  return (
    <SmallDiv>
      <SelectPaymentMethod placeholder={'갯수'} items={dummyOptions} />
    </SmallDiv>
  );
};
