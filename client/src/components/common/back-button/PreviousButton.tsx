import React from 'react';

interface PreviousButton {
  onClick?: () => void;
}

const PreviousButton: React.FC<PreviousButton> = ({ onClick }: PreviousButton) => {
  return (
    <svg x="0px" y="0px" viewBox="0 0 256 256" onClick={onClick}>
      <g>
        <g>
          <polygon points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128" />
        </g>
      </g>
    </svg>
  );
};

export default PreviousButton;
