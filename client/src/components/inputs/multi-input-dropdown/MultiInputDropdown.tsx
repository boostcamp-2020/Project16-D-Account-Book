import React, { useState } from 'react';
import { Options } from '../select/Select';
import InputDropDown from '../input-drop-down/InputDropDown';
import { setImmutable } from '../../../utils/immutable/setImmutable';
interface Props {
  placeholder: string;
  items: Options[];
  onChange?: (selected: string[]) => void;
}

const joinWithComma = (set: Set<string>, items: Options[]): string => {
  const filterItem = items.filter((curr) => set.has(curr.value));
  return filterItem.map((item) => item.label).join(',');
};

const MultiInputDropDown: React.FC<Props> = ({ placeholder, items, onChange }: Props) => {
  const [selected, setSelected] = useState<Set<string>>(new Set<string>());

  const selectChange = (value: string): void => {
    if (selected.has(value)) {
      selected.delete(value);
    } else {
      selected.add(value);
    }
    setSelected(setImmutable(selected));
    if (onChange !== undefined) {
      onChange(Array.from(selected));
    }
  };
  const displayHeader = selected.size === 0 ? placeholder : joinWithComma(selected, items);
  const selectedValue = Array.from(selected);
  return (
    <InputDropDown
      items={items}
      selectValue={selectedValue}
      header={displayHeader}
      onChange={selectChange}
      multi={true}
    />
  );
};

export default MultiInputDropDown;
