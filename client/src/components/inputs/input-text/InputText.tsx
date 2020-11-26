import React from 'react';
import styled from 'styled-components';

interface InputType {
  type: string;
}

const InputTextContainer = styled.input.attrs<InputType>({
  type: 'text',
})`
  width: 100%;
  padding: 5px 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

interface InputTextProps {
  placeholder: string;
  value: string;
  onChange: () => void;
}

const InputText: React.FC<InputTextProps> = ({ placeholder, value, onChange }: InputTextProps) => {
  return <InputTextContainer value={value} placeholder={placeholder} onChange={onChange}></InputTextContainer>;
};

export default InputText;
