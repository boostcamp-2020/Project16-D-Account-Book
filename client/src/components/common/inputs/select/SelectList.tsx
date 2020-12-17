import React from 'react';
import { Options } from './Select';
import SelectItem from './SelectItem';
import styled from 'styled-components';

interface SelectListProps {
  options?: Options[];
  onClick?: (value: string) => void;
  upper?: boolean;
}

interface IListUL {
  upper: boolean;
}

const ListUL = styled.ul<IListUL>`
  padding: 5px 10px;
  margin: 0px;
  width: 100%;
  position: absolute;
  overflow-y: scroll;
  max-height: 250px;
  transform: ${(props) => (props.upper ? 'translateY(-14px)' : 'translateY(14px)')};
  border: 1px solid lightgray;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  bottom: ${(props) => (props.upper ? '100%' : undefined)};
  z-index: 5;
`;

const SelectList: React.FC<SelectListProps> = ({ options, onClick, upper = false }: SelectListProps) => {
  return (
    <ListUL upper={upper}>
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
