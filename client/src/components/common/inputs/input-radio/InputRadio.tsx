import React from 'react';
import styled from 'styled-components';

const InputRadioWrapper = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`;

interface InputRadioProps {
  name: string;
  value: string;
  id: string;
  checked: boolean;
}

const LabelRadioInput = styled.label.attrs((props) => ({
  for: props.id,
}))`
  font-size: 1.2rem;
  width: 100px;
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

const InputRadio = (): JSX.Element => {
  return (
    <InputRadioWrapper>
      <RadioButton id="sunday" name="startDay" value="sunday" checked={true}></RadioButton>
      <LabelRadioInput id="sunday">일요일</LabelRadioInput>
      <RadioButton id="monday" name="startDay" value="monday"></RadioButton>
      <LabelRadioInput id="monday">월요일</LabelRadioInput>
    </InputRadioWrapper>
  );
};

export default InputRadio;
