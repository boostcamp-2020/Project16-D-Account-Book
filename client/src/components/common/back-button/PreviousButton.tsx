import React from 'react';

interface PreviousButton {
  onClick?: () => void;
}

const PreviousButton: React.FC<PreviousButton> = ({ onClick }: PreviousButton) => {
  return (
    <svg viewBox="0 0 24 24" onClick={onClick}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  );
};

export default PreviousButton;
