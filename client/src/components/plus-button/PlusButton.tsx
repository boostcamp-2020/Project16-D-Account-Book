import React from 'react';

interface PlusButton {
  onClick?: () => void;
}

const PlusButton: React.FC<PlusButton> = ({ onClick }: PlusButton) => {
  return (
    <svg viewBox="0 0 512 512" onClick={onClick}>
      <path
        d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
      />
    </svg>
  );
};

export default PlusButton;
