import React from 'react';
import styled from 'styled-components';
import { GRAY } from '../../../constants/color';
import PlusInCircle from '../../common/plus-in-circle/PlusInCircle';

const DivWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: ${GRAY};
`;

const AddAccountbookCard: React.FC = () => {
  return (
    <DivWrapper>
      <PlusInCircle sideLength={'2rem'} />
    </DivWrapper>
  );
};

export default AddAccountbookCard;
