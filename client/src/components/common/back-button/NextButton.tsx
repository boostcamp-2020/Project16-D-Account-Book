import React from 'react';

interface NextButton {
  onClick?: () => void;
}

const NextButton: React.FC<NextButton> = ({ onClick }: NextButton) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 256 256" onClick={onClick}>
      <g>
        <g>
          <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128   " />
        </g>
      </g>
    </svg>
  );
};

export default NextButton;
