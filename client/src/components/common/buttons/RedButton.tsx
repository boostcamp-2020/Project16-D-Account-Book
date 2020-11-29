import React from 'react';
import styled from 'styled-components';
import { MODAL_RED } from '../../../constants/color';
interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Wrapper = styled.div`
  background-color: ${MODAL_RED};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const RedButton: React.FC<IProps> = ({ children, onClick }: IProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default RedButton;
