import { useState, useEffect } from 'react';
import { Options } from '../../components/common/inputs/select/Select';
import { setImmutable } from '../../utils/immutable/setImmutable';

export const isSelectAll = (items: Options[], selected: Set<string>): boolean => {
  const selectList = Array.from(selected);
  if (items.length !== selectList.length) {
    return false;
  }

  const type = selectList.reduce((acc, curr) => {
    return acc && items.some((item) => item.value === curr);
  }, true);

  return type;
};

const useMultiDropDown = (
  onChange?: (selected: string[]) => void,
  defaultValue?: string[],
): [Set<string>, (param: Set<string>) => void, (value: string) => void] => {
  const [selected, setSelected] = useState<Set<string>>(new Set<string>(defaultValue));

  useEffect(() => {
    if (onChange !== undefined) {
      onChange(Array.from(selected));
    }
  }, [selected]);

  const selectChange = (value: string): void => {
    if (selected.has(value)) {
      selected.delete(value);
    } else {
      selected.add(value);
    }
    setSelected(setImmutable(selected));
  };

  return [selected, setSelected, selectChange];
};

export default useMultiDropDown;
