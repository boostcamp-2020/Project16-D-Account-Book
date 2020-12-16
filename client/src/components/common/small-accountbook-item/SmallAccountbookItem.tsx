import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';

interface SmallAccountbookItemWrapperProps {
  bgColor: string;
  show: boolean;
  textColor: string;
  onClick?: () => void;
}

const AccountbookName = styled.div<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  padding: 10px 14px;
  display: block;
`;

const AccountbookDescription = styled.div<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
  padding: 10px 14px;
  display: block;
  font-size: 0.7em;
`;

const AccountbookViewWrapper = styled.div<{ bgColor: string }>`
  display: none;
  position: absolute;
  left: 115%;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 2px 3px 7px gray;
  z-index: 1;
  border-radius: 5px;
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
  transition: all ease 0.1s 0s;

  &:hover {
    border: ${({ textColor }) => textColor} 2px solid;
    cursor: pointer;
  }

  .text {
    text-align: center;
    font-size: 0.8em;
  }

  &:hover ${AccountbookViewWrapper} {
    display: block;
    font-size: 0.8em;
    font-weight: 400;
  }
`;

interface SmallAccountbookItemProps {
  title: string;
  bgColor: string;
  description: string;
  show: boolean;
  onClick?: () => void;
}

const SmallAccountbookItem = ({
  title,
  bgColor,
  description,
  show,
  onClick,
}: SmallAccountbookItemProps): JSX.Element => {
  const textColor = getTextColor(bgColor);
  return (
    <SmallAccountbookItemWrapper bgColor={bgColor} textColor={textColor} show={show} onClick={onClick}>
      <div className="text">{title[0]}</div>
      <AccountbookViewWrapper bgColor={bgColor}>
        <AccountbookName textColor={textColor}>{title}</AccountbookName>
        <AccountbookDescription textColor={textColor}>{description}</AccountbookDescription>
      </AccountbookViewWrapper>
    </SmallAccountbookItemWrapper>
  );
};

export default SmallAccountbookItem;
