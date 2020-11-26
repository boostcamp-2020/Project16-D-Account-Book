import React from 'react';
import PreviousButton from './PreviousButton';
import ModalBackButton from './ModalBackButton';

export default {
  title: '뒤로가기 버튼',
  component: PreviousButton,
};

export const PreviousButtonDefault: React.FC = () => {
  return <PreviousButton />;
};

export const SmallPreviousButtonDefault: React.FC = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      <PreviousButton />
    </div>
  );
};

export const ModalBackButtonDefault: React.FC = () => {
  return <ModalBackButton />;
};
