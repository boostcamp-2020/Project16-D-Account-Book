import React from 'react';
import styled from 'styled-components';

const InputDateTimeWrapper = styled.input.attrs({
  type: 'datetime-local',
})`
  width: 100%;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

interface InputDateTimeProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDateTime: React.FC<InputDateTimeProps> = ({ value, onChange }: InputDateTimeProps) => {
  return <InputDateTimeWrapper value={value} onChange={onChange} />;
};

export default InputDateTime;
