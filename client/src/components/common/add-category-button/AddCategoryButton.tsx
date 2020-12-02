import React from 'react';
import styled from 'styled-components';
import PlusInCircle from '../plus-in-circle/PlusInCircle';
import { GRAY } from '../../../constants/color';

const CategoryWrapper = styled.div`
  width: 100%;
  max-width: 115px;
  height: 100%;
  max-height: 50px;
  background-color: ${GRAY};
  box-sizing: border-box;
  border-radius: 360px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const PlusInCircleWrapper = styled.div`
  margin: auto 0;
`;

const AddCategoryButton = (): JSX.Element => {
  return (
    <CategoryWrapper>
      <PlusInCircleWrapper>
        <PlusInCircle sideLength={'1.5rem'} />
      </PlusInCircleWrapper>
    </CategoryWrapper>
  );
};

export default AddCategoryButton;
