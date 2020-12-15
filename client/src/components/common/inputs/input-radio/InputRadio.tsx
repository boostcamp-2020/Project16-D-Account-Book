import React from 'react';
import styled from 'styled-components';
import { IInputRadio } from '../../../../types/inputRadio';

const InputRadioWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  z-index: 2;
`;

interface InputRadioProps {
  name: string;
  value: string;
  id: string;
  checked: boolean;
}

const LabelRadioInput = styled.label.attrs((props) => ({
  htmlFor: props.id,
}))`
  display: inline-block;
  font-size: 1rem;
  margin-right: 3em;
  margin-top: 5px;
`;

const RadioButton = styled.input.attrs((props) => ({
  type: 'radio',
  name: props.name,
  id: props.id,
  value: props.value,
  checked: props.checked,
}))<InputRadioProps>`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const InputRadio: React.FC<IInputRadio> = ({ name, left, right }: IInputRadio): JSX.Element => {
  return (
    <InputRadioWrapper>
      <RadioButton
        id={left.id}
        name={name}
        value={left.value}
        checked={left.checked}
        onChange={left.onChange}
      ></RadioButton>
      <LabelRadioInput id={left.id}>{left.label}</LabelRadioInput>
      <RadioButton
        id={right.id}
        name={name}
        value={right.value}
        checked={right.checked}
        onChange={right.onChange}
      ></RadioButton>
      <LabelRadioInput id={right.id}>{right.label}</LabelRadioInput>
    </InputRadioWrapper>
  );
};

export default InputRadio;
