import React from 'react';
import Styled from 'styled-components';
import { getTextColor } from '../../utils/color';

const SmallAccountbookItemWrapper = Styled.div<{ bgColor: string; textColor: string }>`
  width: 50px;
  height: 50px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  font-size: 1.7rem;
  padding: 12px 10px 12px 10px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface SmallAccountbookItemProps {
  text: string;
  bgColor: string;
}

const SmallAccountbookItem = ({ text, bgColor }: SmallAccountbookItemProps): JSX.Element => {
  const textColor = getTextColor(bgColor);
  return (
    <SmallAccountbookItemWrapper bgColor={bgColor} textColor={textColor}>
      {text}
    </SmallAccountbookItemWrapper>
  );
};

export default SmallAccountbookItem;
