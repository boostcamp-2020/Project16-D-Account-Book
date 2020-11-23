import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import InputColor from 'react-input-color';

const ColorPickerWrapper = Styled.div`
  width: 26px;
  height: 26px;
  svg {
    fill: ${(props) => props.color};
    z-index: 10000;
    position: relative;
    top: -34px;
    left: 0;
    pointer-events: none;
  }
`;
interface ColorPickerProps {
  color: string,
  setColor: (color: string) => void;
};

const ColorPicker = ({color, setColor}: ColorPickerProps) => {
  const [inputColor, setInputColor] = useState({hex: color});

  useEffect(() => {
    setColor(inputColor.hex);
  }, [inputColor])

  return (
    <ColorPickerWrapper color={color}>
        <InputColor initialValue={color} onChange={setInputColor} placement="down" style={{width: 24, height: 30, opacity: 0}} />
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" >
        <path d="M10,827.3h980V990H10V827.3z M785.2,478.9c54.9,60,82.3,107.8,82.3,143.6c0,21.7-8.3,40.8-24.9,57.4c-16.6,16.6-35.7,24.9-57.4,24.9s-40.5-8.3-56.5-24.9c-16-16.6-23.9-35.7-23.9-57.4c0-15.3,6.7-35.1,20.1-59.3c13.4-24.2,26.5-44,39.2-59.3L785.2,478.9z M222.5,417.7h392.4L417.7,222.5L222.5,417.7z M685.7,375.6c12.8,12.8,19.2,27.4,19.2,44s-6.4,30.6-19.2,42.1L461.7,685.6c-12.8,12.8-27.4,19.2-44,19.2c-15.3,0-29.4-6.4-42.1-19.2L149.8,461.7c-12.8-11.5-19.2-25.5-19.2-42.1s6.4-31.3,19.2-44L360.3,165l-97.6-97.6L322,10L685.7,375.6z"/>
      </svg>
    </ColorPickerWrapper>

  )
}

export default ColorPicker;