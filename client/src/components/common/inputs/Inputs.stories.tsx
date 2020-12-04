import React, { useState } from 'react';
import InputText from './input-text/InputText';
import styled from 'styled-components';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import MultiInputDropDown from './multi-input-dropdown/MultiInputDropdown';
import SingleInputDropDown from './single-input-dropdown/SingleInputDropdown';
import SelectPaymentMethod from './select-payment-method/SelectPaymentMethod';
import MultiInputDropdownWithCheckBox from './multi-input-dropdown/MultiInputDropdownWithCheckBox';
import ModalClassify from './modal-classify/ModalClassify';
import InputDateTime from './input-datetime/InputDateTime';
import InputRadio from './input-radio/InputRadio';

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

export const MultiInputDropdownWithCheckBoxDefault: React.FC = () => {
  return (
    <SmallDiv>
      <MultiInputDropdownWithCheckBox
        placeholder={'카드를 선택하세요'}
        items={dummyOptions}
        checkBoxName={'지출'}
      ></MultiInputDropdownWithCheckBox>
    </SmallDiv>
  );
};

export const SelectPaymentMethodDefault: React.FC = () => {
  return (
    <SmallDiv>
      <SelectPaymentMethod placeholder={'지출'} items={dummyOptions} />
    </SmallDiv>
  );
};

export const ModalIncome: React.FC = () => {
  const onChange = () => {
    //
  };
  return (
    <SmallDiv>
      <ModalClassify classify={false} onChange={onChange} value={'지출'} />
    </SmallDiv>
  );
};

export const InputDateTimeDefault: React.FC = () => {
  return (
    <SmallDiv>
      <InputDateTime />
    </SmallDiv>
  );
};

export const InputRadioDefault: React.FC = () => {
  return <InputRadio />;
};
