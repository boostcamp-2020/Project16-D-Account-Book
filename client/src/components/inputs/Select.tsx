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

const Select: React.FC<SelectProps> = ({ options, defaultValue = '', onChange }: SelectProps) => {
  const [optionShow, setOptionShow] = useState(false);
  const titleClicked = (): void => {
    setOptionShow((state) => !state);
  };
  return (
    <SelectWrapper>
      <SelectTitle onClick={titleClicked}>{defaultValue}</SelectTitle>
      {optionShow && <SelectList options={options} onChange={onChange} />}
    </SelectWrapper>
  );
};

export default Select;
