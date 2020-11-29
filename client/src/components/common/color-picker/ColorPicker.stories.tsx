import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'color-picker/ColorPicker',
  component: ColorPicker,
};

export const DefaultColorPicker = (): JSX.Element => {
  const [accountbook, setAccountbook] = useState({ id: 3, color: '#ffff00' });
  const [inputColor, setInputColor] = useState({ hex: accountbook.color });
  return <ColorPicker inputColor={inputColor} setInputColor={setInputColor} />;
};
