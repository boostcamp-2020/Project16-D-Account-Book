import React, { useState } from 'react';
import AccountPreview from './AccountPreview';

export default {
  title: 'account-preview/AccountPreview',
  component: AccountPreview,
};

export const Default = (): JSX.Element => {
  const [inputColor, setInputColor] = useState<string>('#000000');
  const title = '가계부 1';

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  return <AccountPreview title={title} color={inputColor} onChange={onChange} />;
};
