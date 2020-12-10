import React from 'react';
import SettingsSidebar from './SettingsSidebar';

export default {
  title: 'settings-sidebar',
  component: SettingsSidebar,
};

export const Default = (): JSX.Element => {
  return <SettingsSidebar currentpage={'accountbook'}></SettingsSidebar>;
};
