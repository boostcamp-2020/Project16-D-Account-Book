import React from 'react';
import styled from 'styled-components';
import PlusInCircle from '../plus-in-circle/PlusInCircle';
import { GRAY } from '../../../constants/color';

const AccountWrapper = styled.div`
  width: 17vw;
  height: 10vw;
  background-color: ${GRAY};
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 2px 3px 7px gray;
  }
`;

const PlusInCircleWrapper = styled.div`
  margin: auto 0;
`;

const AddAccountButton = (): JSX.Element => {
  return (
    <AccountWrapper>
      <PlusInCircleWrapper>
        <PlusInCircle sideLength={'3rem'} />
      </PlusInCircleWrapper>
    </AccountWrapper>
  );
};

export default AddAccountButton;
