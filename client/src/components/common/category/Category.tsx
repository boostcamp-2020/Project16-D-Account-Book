import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';

const CategoryWrapper = styled.div<{ bgColor: string; textColor: string }>`
  width: 100%;
  max-width: 115px;
  height: 100%;
  max-height: 50px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  text-align: center;
  padding: 12px 10px 12px 10px;
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
    <CategoryWrapper bgColor={bgColor} textColor={textColor}>
      {text}
    </CategoryWrapper>
  );
};

export default Category;
