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
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    box-shadow: 2px 3px 7px gray;
  }
`;

interface Props {
  onClick?: () => void;
}

const AddAccountbookCard: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <DivWrapper onClick={onClick}>
      <PlusInCircle sideLength={'2rem'} />
    </DivWrapper>
  );
};

export default AddAccountbookCard;
