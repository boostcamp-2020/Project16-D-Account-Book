import React from 'react';
import BackButton from './BackButton';
import OvenBackButton from './OvenBackButton';

export default {
  title: '뒤로가기 버튼',
  component: BackButton,
};

export const BackButtonDefault: React.FC = () => {
  return <BackButton />;
};

export const SmallBackButtonDefault: React.FC = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      <BackButton />
    </div>
  );
};

export const OvenBackButtonDefault: React.FC = () => {
  return <OvenBackButton />;
};
