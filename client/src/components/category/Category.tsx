import React from 'react';
import Styled from 'styled-components';
import { getTextColor } from '../../utils/color';

const Div = Styled.div<{ bgColor: string; textColor: string }>`
  width: 115px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  text-align: center;
  padding: 7px 10px 7px 10px;
  border-radius: 360px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface CategoryProps {
  text: string;
  bgColor: string;
}

const Category = ({ text, bgColor }: CategoryProps): JSX.Element => {
  const textColor = getTextColor(bgColor);
  return (
    <Div bgColor={bgColor} textColor={textColor}>
      {text}
    </Div>
  );
};

export default Category;
