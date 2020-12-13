import React, { useState } from 'react';
import AccountPreview from './AccountPreview';

export default {
  title: 'account-preview/AccountPreview',
  component: AccountPreview,
};

export const Default = (): JSX.Element => {
  const [inputColor, setInputColor] = useState<string>('#000000');
  const name = '가계부 1';

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return <AccountPreview name={name} color={inputColor} onChange={onChange} />;
};
