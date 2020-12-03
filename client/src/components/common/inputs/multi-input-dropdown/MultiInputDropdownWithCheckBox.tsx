import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Options } from '../select/Select';
import InputDropDown from '../input-drop-down/InputDropDown';
import useMultiDropDown, { isSelectAll } from '../../../../hook/use-drop-down/useMultiDropDown';
import { joinWithComma } from './MultiInputDropdown';
interface Props {
  placeholder: string;
  items: Options[];
  checkBoxName: string;
  onChange?: (selected: string[]) => void;
}

const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`;

const CheckBoxArea = styled.div`
  display: inline-block;
  width: 30%;
  margin: 0px;
  padding: 0px;
`;

const DropdownWrapper = styled.div`
  display: inline-block;
  width: 70%;
  margin: 0px;
  padding: 0px;
`;

const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  margin-right: 15px;
`;

const Label = styled.label``;

const MultiInputDropdownWithCheckBox: React.FC<Props> = ({ placeholder, items, checkBoxName, onChange }: Props) => {
  const [selected, setSelected, selectChange] = useMultiDropDown(onChange);
  const [checkBoxClicked, setCheckBoxClicked] = useState<boolean>(false);
  const displayHeader = selected.size === 0 ? placeholder : joinWithComma(selected, items);
  const selectedValue = Array.from(selected);

  useEffect(() => {
    const checkedItems = items.filter((item) => item.checked);
    setSelected(new Set(checkedItems.map((item) => item.value)));
  }, []);

  useEffect(() => {
    if (isSelectAll(items, selected)) {
      setCheckBoxClicked(true);
      return;
    }
    setCheckBoxClicked(false);
  }, [selected]);

  const checkBoxToggle = () => {
    if (isSelectAll(items, selected)) {
      setSelected(new Set<string>([]));
    } else {
      const allItemValue = items.map((item) => item.value);
      setSelected(new Set<string>(allItemValue));
    }
  };

  return (
    <ComponentWrapper>
      <CheckBoxArea>
        <CheckBox type="checkbox" checked={checkBoxClicked} onChange={checkBoxToggle} />
        <Label onClick={checkBoxToggle}>{checkBoxName}</Label>
      </CheckBoxArea>
      <DropdownWrapper>
        <InputDropDown
          items={items}
          selectValue={selectedValue}
          header={displayHeader}
          onChange={selectChange}
          multi={true}
        />
      </DropdownWrapper>
    </ComponentWrapper>
  );
};

export default MultiInputDropdownWithCheckBox;
