import React from 'react';
import styled from 'styled-components';

interface InputType {
  type: string | number;
  maxLength: number;
}

const InputTextContainer = styled.input.attrs((props) => ({
  type: 'text',
  maxLength: props.maxLength,
}))<InputType>`
  width: 100%;
  padding: 15px 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

interface InputTextProps {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

const InputText: React.FC<InputTextProps> = ({ maxLength, placeholder, value, onChange }: InputTextProps) => {
  return (
    <InputTextContainer
      maxLength={maxLength}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></InputTextContainer>
  );
};

export default InputText;
