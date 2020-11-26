import React from 'react';

interface PreviousButton {
  onClick?: () => void;
}

const PreviousButton: React.FC<BackButton> = ({ onClick }: BackButton) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 306 306" onClick={onClick}>
      <g>
        <g id="chevron-left">
          <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153   " />
        </g>
      </g>
    </svg>
  );
};

export default PreviousButton;
