import React from 'react';
import Styled from 'styled-components';
import { getTextColor } from '../../utils/color';

const SmallAccountbookItemWrapper = Styled.div<{ bgColor: string; textColor: string }>`
  width: 40px;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  text-align: center;
  border-radius: 5px;
  font-size: 1.7rem;
  padding: 8px 6px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px auto;
`;

interface SmallAccountbookItemProps {
  id: number;
  bgColor: string;
}

const SmallAccountbookItem = ({ id, bgColor }: SmallAccountbookItemProps): JSX.Element => {
  const textColor = getTextColor(bgColor);
  return (
    <SmallAccountbookItemWrapper bgColor={bgColor} textColor={textColor}>
      {id}
    </SmallAccountbookItemWrapper>
  );
};

export default SmallAccountbookItem;
