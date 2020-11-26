import React from 'react';
import { Options } from '../select/Select';
interface Props {
  items: Options[];
  placeholder: string;
  onChange?: (selected: string[]) => void;
}

const SelectPaymentMethod: React.FC<Props> = ({ items, placeholder, onChange }: Props) => {
  return <div>placeholder</div>;
};

export default SelectPaymentMethod;
