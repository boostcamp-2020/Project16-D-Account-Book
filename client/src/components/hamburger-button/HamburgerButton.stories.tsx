import React from 'react';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'hamburger-button/HamburgerButton',
  component: HamburgerButton,
};

export const HamburgerButtonDefault: React.FC = () => {
  return <HamburgerButton />;
};

export const SidebarHamburgerButton: React.FC = () => {
  return (
    <div
      style={{
        width: '30px',
        height: '30px',
      }}
    >
      <HamburgerButton />
    </div>
  );
};
