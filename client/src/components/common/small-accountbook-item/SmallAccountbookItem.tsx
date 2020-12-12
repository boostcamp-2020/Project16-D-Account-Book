import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import { GRAY, LIGHT_GRAY } from '../../../constants/color';

interface SmallAccountbookItemWrapperProps {
  bgColor: string;
  show: boolean;
  textColor: string;
  onClick?: () => void;
}

const AccountbookName = styled.div`
  color: black;
  padding: 10px 14px;
  display: block;

  &:hover {
    background-color: ${LIGHT_GRAY};
    cursor: pointer;
  }
`;

const AccountbookNameWrapper = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  background-color: ${GRAY};
  min-width: 160px;
  box-shadow: 0px 4px 8px 0px;
  z-index: 1;
`;

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

  &:hover ${AccountbookNameWrapper} {
    display: block;
    font-size: 0.8em;
    font-weight: 400;
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
      <AccountbookNameWrapper>
        <AccountbookName>가계부 이름</AccountbookName>
      </AccountbookNameWrapper>
    </SmallAccountbookItemWrapper>
  );
};

export default SmallAccountbookItem;
