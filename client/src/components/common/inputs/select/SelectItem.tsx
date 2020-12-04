import React from 'react';
import styled from 'styled-components';
import ItemCheckSVG from './ItemCheckSVG';

interface SelectItemProps {
  label: string;
  value: string | number;
  checked?: boolean;
  onClick?: (value: string) => void | undefined;
}

const SelectListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  border-bottom: 1px solid lightgray;
  &:last-of-type {
    border-bottom: 0px solid black;
  }
`;

const ItemLabel = styled.p`
  padding: 0px;
  margin: 0px;
`;
const ItemChecked = styled.div`
  padding: 0px;
  margin: 0px;
  width: 1rem;
`;

const SelectItem: React.FC<SelectItemProps> = ({ label, value, checked, onClick }: SelectItemProps) => {
  return (
    <SelectListItem
      onClick={() => {
        if (onClick !== undefined) {
          onClick(value as string);
        }
      }}
    >
      <ItemLabel>{label}</ItemLabel>
      {checked && (
        <ItemChecked>
          <ItemCheckSVG />
        </ItemChecked>
      )}
    </SelectListItem>
  );
};

export default SelectItem;
