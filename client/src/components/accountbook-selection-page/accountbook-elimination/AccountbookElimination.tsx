import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import { RED } from '../../../constants/color';

const Wrapper = styled.div<{ itemColor: string; bgColor: string }>`
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  .elimination {
    fill: ${({ itemColor }) => itemColor};
  }

  &:hover .elimination {
    fill: ${RED};
    stroke: ${({ bgColor, itemColor }) => {
      return bgColor === RED ? itemColor : null;
    }};
    stroke-width: ${({ bgColor }) => {
      return bgColor === RED ? '10px' : null;
    }};
  }
`;

interface SettingProps {
  bgColor: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AccountbookElimination = ({ bgColor, onClick }: SettingProps): JSX.Element => {
  const itemColor = getTextColor(bgColor);
  return (
    <Wrapper itemColor={itemColor} bgColor={bgColor} onClick={onClick}>
      <svg viewBox="0 0 329.26933 329" className="elimination">
        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
      </svg>
    </Wrapper>
  );
};

export default AccountbookElimination;
