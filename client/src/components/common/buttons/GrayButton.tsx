import React from 'react';
import styled from 'styled-components';
import { MODAL_GRAY } from '../../../constants/color';

interface IProps {
  onClick?: () => void;
  children?: React.ReactNode;
}
const Wrapper = styled.div`
  background-color: ${MODAL_GRAY};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const GrayButton: React.FC<IProps> = ({ children, onClick }: IProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default GrayButton;
