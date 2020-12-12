import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';

interface SmallAccountbookItemWrapperProps {
  bgColor: string;
  show: boolean;
  textColor: string;
  onClick?: () => void;
}

const SmallAccountbookItemWrapper = styled.div<SmallAccountbookItemWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ show }) => (show ? '40px' : '0')};
  height: ${({ show }) => (show ? '40px' : '0')};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1.7rem;
  padding: ${({ show }) => (show ? '8px 6px' : '0')};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px auto;
  transition: all ease 0.3s 0s;

  &:hover {
    border: ${({ textColor }) => textColor} 3px solid;
    cursor: pointer;
  }

  .text {
    text-align: center;
  }
`;

interface SmallAccountbookItemProps {
  id: number;
  bgColor: string;
  show: boolean;
  onClick?: () => void;
}

const SmallAccountbookItem = ({ id, bgColor, show, onClick }: SmallAccountbookItemProps): JSX.Element => {
  const textColor = getTextColor(bgColor);
  return (
    <SmallAccountbookItemWrapper bgColor={bgColor} textColor={textColor} show={show} onClick={onClick}>
      <div className="text">{id}</div>
    </SmallAccountbookItemWrapper>
  );
};

export default SmallAccountbookItem;
