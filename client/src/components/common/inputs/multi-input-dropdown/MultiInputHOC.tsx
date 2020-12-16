import React, { useEffect } from 'react';
import { Options } from '../select/Select';
import InputDropDown from '../input-drop-down/InputDropDown';
import useMultiDropDown from '../../../../hook/use-drop-down/useMultiDropDown';

interface Props {
  placeholder: string;
  items: Options[];
  onChange?: (selected: string[]) => void;
  defaultValue?: string[];
}

interface createPlaceHolder {
  (set: Set<string>, items: Options[]): string;
}

export default function MultiInputDropDownHOC(createPlaceName: createPlaceHolder): React.FC<Props> {
  const MultiInputDropDown: React.FC<Props> = ({ placeholder, items, onChange, defaultValue }: Props) => {
    const [selected, setSelected, selectChange] = useMultiDropDown(onChange, defaultValue);

    useEffect(() => {
      setSelected(new Set(defaultValue));
    }, [items]);

    const displayHeader = selected.size === 0 ? placeholder : createPlaceName(selected, items);
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
  return MultiInputDropDown;
}
