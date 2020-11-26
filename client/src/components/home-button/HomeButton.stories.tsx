import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: '홈 버튼',
  component: HomeButton,
};

export const HomeButtonDefault: React.FC = () => {
  return <HomeButton />;
};

export const SidebarHomeButton: React.FC = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      <HomeButton />
    </div>
  );
};
