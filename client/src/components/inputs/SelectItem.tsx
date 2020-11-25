import React from 'react';
import styled from 'styled-components';
import ItemCheckSVG from './ItemCheckSVG';

interface SelectItemProps {
  label: string;
  value: string | number;
  checked?: boolean;
  onChange: () => void;
}

const SelectListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  border-bottom: 1px solid lightgray;
`;

const ItemLabel = styled.p`
  padding: 0px;
  margin: 0px;
`;
const ItemChecked = styled.div`
  padding: 0px;
  margin: 0px;
  width: 1.2rem;
`;

const SelectItem: React.FC<SelectItemProps> = ({ label, value, checked, onChange }: SelectItemProps) => {
  return (
    <SelectListItem onChange={onChange}>
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
