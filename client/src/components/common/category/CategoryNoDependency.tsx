import React from 'react';
import styled from 'styled-components';
import { SingleCategory } from '../../../types/category';
import { CategoryWrapper } from './Category';
import { getTextColor } from '../../../utils/color';

const TextSmall = styled.p`
  font-size: 0.9em;
  padding: 0;
  margin: 0;
`;

const CategoryNoDependency: React.FC<SingleCategory> = ({ name, color, shadow, onClick }: SingleCategory) => {
  const textColor = getTextColor(color);
  return (
    <CategoryWrapper bgColor={color} textColor={textColor} shadow={shadow} onClick={onClick}>
      <TextSmall>{name}</TextSmall>
    </CategoryWrapper>
  );
};

export default CategoryNoDependency;
