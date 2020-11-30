import React from 'react';
import styled from 'styled-components';
import { GRAY } from '../../../../constants/color';

const Background = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${GRAY};
  cursor: pointer;
  &:hover {
    border: 2px solid white;
  }
`;

interface Props {
  children?: JSX.Element;
}

const MenuBackground: React.FC<Props> = ({ children }: Props) => {
  return <Background>{children}</Background>;
};

export default MenuBackground;
