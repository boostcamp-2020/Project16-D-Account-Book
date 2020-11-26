import React from 'react';

interface Props {
  placeholder: string;
}

const MultiInputDropDown: React.FC<Props> = ({ placeholder }: Props) => {
  return <div>{placeholder}</div>;
};

export default MultiInputDropDown;
