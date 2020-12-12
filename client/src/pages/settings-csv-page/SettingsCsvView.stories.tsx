import React from 'react';
import SettingsCsvView from './SettingsCsvView';

export default {
  title: 'pages/settings-page/SettingsCsvPage',
  component: SettingsCsvView,
};

export const Default: React.FC = () => {
  return <SettingsCsvView accountbookId={1} />;
};
