import React from 'react';
import SettingsSidebarBody from './SettingsSidebarBody';

export default {
  title: 'settings-sidebar/settings-sidebar-body',
  component: SettingsSidebarBody,
};

export const AccountbookSettingsPage = (): JSX.Element => {
  return <SettingsSidebarBody currentPage={'accountbook'} />;
};

export const CategoriesSettingsPage = (): JSX.Element => {
  return <SettingsSidebarBody currentPage={'categories'} />;
};

export const AccountsSettingsPage = (): JSX.Element => {
  return <SettingsSidebarBody currentPage={'accounts'} />;
};

export const SocialSettingsPage = (): JSX.Element => {
  return <SettingsSidebarBody currentPage={'social'} />;
};

export const CsvSettingsPage = (): JSX.Element => {
  return <SettingsSidebarBody currentPage={'csv'} />;
};
