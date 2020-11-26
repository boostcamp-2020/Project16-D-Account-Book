import React from 'react';
import HamburgerButton from './HamburgerButton';

export default {
  title: '햄버거 버튼',
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
