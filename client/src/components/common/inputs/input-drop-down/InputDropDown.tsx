import React, { useState, useRef } from 'react';
import Select, { Options } from '../select/Select';
import { createRenderData } from '../../../../hook/use-drop-down';
import useClickOutSide from '../../../../hook/use-click-outside/useClickOutside';
import { observer } from 'mobx-react';

interface InputDropDownProps {
  items: Options[];
  header: string;
  selectValue?: string[] | undefined | string;
  onChange?: (value: string) => void;
  multi?: boolean;
}

const InputDropDown: React.FC<InputDropDownProps> = ({
  items,
  header,
  selectValue,
  onChange,
  multi = false,
}: InputDropDownProps) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const clickHeader = (): void => {
    setShow(!show);
  };

  useClickOutSide(ref, () => {
    setShow(false);
  });

  const clickItem = (target: string): void => {
    if (onChange !== undefined) {
      onChange(target);
    }
    if (!multi) {
      setShow((state) => !state);
    }
  };

  const checkedData = createRenderData(items, selectValue);

  return (
    <Select
      options={checkedData}
      defaultValue={header}
      showDropDown={show}
      itemClick={clickItem}
      headerClick={clickHeader}
      targetRef={ref}
    />
  );
};

export default observer(InputDropDown);
