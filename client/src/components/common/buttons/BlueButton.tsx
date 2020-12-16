import React from 'react';
import styled from 'styled-components';
import { ModalCommonButton } from '../../../types/buttonTypes';
import { BLUE } from '../../../constants/color';

const Wrapper = styled.div`
  background-color: ${BLUE};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const RedButton: React.FC<ModalCommonButton> = ({ children, onClick }: ModalCommonButton) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default RedButton;
