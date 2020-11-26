import React from 'react';
import { Options } from './Select';
import SelectItem from './SelectItem';
import styled, { keyframes } from 'styled-components';

interface SelectListProps {
  options?: Options[];
  onClick?: (value: string) => void;
}

const ListUL = styled.ul`
  padding: 5px 10px;
  margin: 0px;
  width: 100%;
  position: absolute;
  height: 500%;
  overflow-y: scroll;
  transform: translateY(20px);
  border: 1px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  z-index: 5;
`;

const SelectList: React.FC<SelectListProps> = ({ options, onClick }: SelectListProps) => {
  return (
    <ListUL>
      {options &&
        options.map((selectItem) => (
          <SelectItem
            key={selectItem.value}
            label={selectItem.label}
            value={selectItem.value}
            checked={selectItem.checked}
            onClick={onClick}
          />
        ))}
    </ListUL>
  );
};

export default SelectList;
