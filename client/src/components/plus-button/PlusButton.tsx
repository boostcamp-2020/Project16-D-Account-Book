import React from 'react';
import Styled from 'styled-components';

interface PlusButtonWrapperProps {
  show: boolean;
}

const PlusButtonWrapper = Styled.div<PlusButtonWrapperProps>`
  width: ${({ show }) => (show ? '20px' : '0')};
  height: ${({ show }) => (show ? '20px' : '0')};
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  margin: 30px auto;
`;

interface PlusButton {
  show: boolean;
  onClick?: () => void;
}

const PlusButton: React.FC<PlusButton> = ({ show, onClick }: PlusButton) => {
  return (
    <PlusButtonWrapper show={show} onClick={onClick}>
      <svg viewBox="0 0 512 512">
        <path
          d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
        v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
        />
      </svg>
    </PlusButtonWrapper>
  );
};

export default PlusButton;
