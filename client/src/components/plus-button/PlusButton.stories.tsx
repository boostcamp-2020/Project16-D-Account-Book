import React from 'react';
import PlusButton from './PlusButton';

export default {
  title: '플러스 버튼',
  component: PlusButton,
};

export const PlusButtonDefault: React.FC = () => {
  return <PlusButton />;
};

export const SidebarPlusButton: React.FC = () => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
      }}
    >
      <PlusButton />
    </div>
  );
};
