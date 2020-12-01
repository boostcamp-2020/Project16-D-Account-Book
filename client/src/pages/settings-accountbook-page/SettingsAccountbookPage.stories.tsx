import React from 'react';
import SettingsAccountbookPage from './SettingsAccountbookPage';

export default {
  title: 'settings-accountbook-page/settings-accountbook-page',
  component: SettingsAccountbookPage,
};

const test = 'black';

export const Default = (): JSX.Element => {
  return <SettingsAccountbookPage color={test} />;
};
