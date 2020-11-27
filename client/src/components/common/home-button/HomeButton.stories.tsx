import React from 'react';
import HomeButton from './HomeButton';

export default {
  title: 'home-button/HomeButton',
  component: HomeButton,
};

export const HomeButtonDefault: React.FC = () => {
  return <HomeButton show={true} />;
};

export const SidebarHomeButton: React.FC = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '100px',
      }}
    >
      <HomeButton show={true} />
    </div>
  );
};
