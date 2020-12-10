import React from 'react';
import styled from 'styled-components';
import { CategoryWrapper, CategoryProps } from './Category';
import { getTextColor } from '../../../utils/color';

const TextSmall = styled.p`
  font-size: 0.9em;
  padding: 0;
  margin: 0;
`;

const CategoryNoDependency: React.FC<CategoryProps> = ({ text, bgColor, shadow, onClick }: CategoryProps) => {
  const textColor = getTextColor(bgColor);
  return (
    <CategoryWrapper bgColor={bgColor} textColor={textColor} shadow={shadow} onClick={onClick}>
      <TextSmall>{text}</TextSmall>
    </CategoryWrapper>
  );
};

export default CategoryNoDependency;
