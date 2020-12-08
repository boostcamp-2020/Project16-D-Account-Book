import React from 'react';
import SettingsAccountsView from './SettingsAccountsView';

export default {
  title: 'pages/settings-page/SettingsAccountsPage',
  component: SettingsAccountsView,
};

export const Default = (): JSX.Element => {
  return <SettingsAccountsView accountbookId={1} />;
};
