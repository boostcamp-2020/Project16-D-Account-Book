import React from 'react';
import styled from 'styled-components';
import { LIGHT_BLUE } from '../../../../constants/color';

interface InputType {
  type: string | number;
  maxLength: number;
  focusColor: string | undefined;
}

const InputTextContainer = styled.input.attrs((props) => ({
  type: 'text',
  maxLength: props.maxLength,
  disabled: props.disabled,
}))<InputType>`
  width: 100%;
  padding: 15px 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
    border: ${({ focusColor }) => (focusColor ? focusColor : LIGHT_BLUE)} 0.5px solid;
    box-shadow: ${({ focusColor }) => (focusColor ? focusColor : LIGHT_BLUE)} 0px 0px 2.5px 2.5px;
  }
`;

interface InputTextProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  disabled?: boolean;
  focusColor?: string;
}

const InputText: React.FC<InputTextProps> = ({
  maxLength,
  placeholder,
  value,
  onChange,
  disabled,
  focusColor,
}: InputTextProps) => {
  return (
    <InputTextContainer
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      focusColor={focusColor}
    ></InputTextContainer>
  );
};

export default InputText;
