import React, { useState } from 'react';
import { Options } from '../select/Select';
import InputDropDown from '../Input-drop-down/InputDropDown';
interface Props {
  items: Options[];
  placeholder: string;
  onChange: (target: string) => void;
}
const SingleInputDropDown: React.FC<Props> = ({ items, placeholder, onChange }: Props) => {
  const [select, setSelect] = useState<string>();

  const displayHeader = select ? select : placeholder;

  const selectChange = (value: string): void => {
    setSelect(value);
    onChange(value);
  };

  return <InputDropDown items={items} header={displayHeader + ''} selectValue={[select]} onChange={selectChange} />;
};

export default SingleInputDropDown;
