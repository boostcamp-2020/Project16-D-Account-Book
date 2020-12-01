import React from 'react';
import styled from 'styled-components';

interface InputType {
  type: string | number;
}

const InputTextContainer = styled.input.attrs<InputType>({
  type: 'text',
})`
  width: 100%;
  height: ${(props) => props.height};
  padding: 5px 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

interface InputTextProps {
  height?: number | string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({ height, placeholder, value, onChange }: InputTextProps) => {
  return (
    <InputTextContainer
      height={height}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></InputTextContainer>
  );
};

export default InputText;
