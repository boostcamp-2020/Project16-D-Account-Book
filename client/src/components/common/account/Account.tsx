import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';

const AccountWrapper = styled.div<{ bgColor: string; textColor: string; shadow?: boolean }>`
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 190px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    box-shadow: ${({ shadow }) => (shadow === true ? '2px 3px 7px gray' : 0)};
  }
`;

interface AccountProps {
  text: string;
  bgColor: string;
  shadow?: boolean;
  onClick?: () => void;
}

const Account = ({ text, bgColor, shadow, onClick }: AccountProps): JSX.Element => {
  const textColor = getTextColor(bgColor);
  return (
    <AccountWrapper bgColor={bgColor} textColor={textColor} shadow={shadow} onClick={onClick}>
      {text}
    </AccountWrapper>
  );
};

export default Account;
