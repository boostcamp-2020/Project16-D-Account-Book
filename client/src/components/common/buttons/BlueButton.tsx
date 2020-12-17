import React from 'react';
import styled from 'styled-components';
import { ModalCommonButton } from '../../../types/buttonTypes';
import { BLUE, WHITE, DISABLED_GRAY } from '../../../constants/color';

const Wrapper = styled.div<{ disabled?: string }>`
  background-color: ${({ disabled }) => (disabled ? DISABLED_GRAY : BLUE)};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${WHITE};
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled};
`;

const BlueButton: React.FC<ModalCommonButton> = ({ children, onClick }: ModalCommonButton) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default BlueButton;
