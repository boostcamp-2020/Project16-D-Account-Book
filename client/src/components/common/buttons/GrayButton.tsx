import React from 'react';
import styled from 'styled-components';
import { ModalCommonButton } from '../../../types/buttonTypes';
import { MODAL_GRAY } from '../../../constants/color';

const Wrapper = styled.div`
  background-color: ${MODAL_GRAY};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const GrayButton: React.FC<ModalCommonButton> = ({ children, onClick }: ModalCommonButton) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default GrayButton;
