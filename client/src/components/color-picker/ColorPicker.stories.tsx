import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'color-picker/ColorPicker',
  component: ColorPicker,
};

export const DefaultColorPicker = (): JSX.Element => {
  const [color, setColor] = useState('#ffff00');
  return <ColorPicker color={color} setColor={setColor} />;
};
