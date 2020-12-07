import React from 'react';
import SettingsAccountsView from './SettingsAccountsView';
import { RootProvider } from '../../store/RootStore';

export default {
  title: 'pages/settings-page/SettingsAccountsPage',
  component: SettingsAccountsView,
};

export const Default = (): JSX.Element => {
  return (
    <RootProvider>
      <SettingsAccountsView accountbookId={1} />
    </RootProvider>
  );
};
