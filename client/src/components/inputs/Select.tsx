import React, { useState } from 'react';
import styled from 'styled-components';

import SelectList from './SelectList';

export interface Options {
  value: string | number;
  label: string;
  checked?: boolean;
}

interface SelectProps {
  options?: Options[];
  defaultValue?: string;
  onChange?: () => void;
  showDropDown?: boolean;
}

const SelectWrapper = styled.div`
  width: 100%;
  padding: 0px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  position: relative;
`;

const SelectTitle = styled.p`
  padding: 5px;
  margin: 0px;
  color: #7d7d7d;
`;

const Select: React.FC<SelectProps> = ({ options, defaultValue = '', onChange, showDropDown }: SelectProps) => {
  return (
    <SelectWrapper>
      <SelectTitle>{defaultValue}</SelectTitle>
      {showDropDown && <SelectList options={options} onChange={onChange} />}
    </SelectWrapper>
  );
};

export default Select;
