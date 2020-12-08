import React from 'react';
import SettingsCategoriesView from './SettingsCategoriesView';

export default {
  title: 'pages/settings-page/SettingsCategoriesPage',
  component: SettingsCategoriesView,
};

export const Default: React.FC = () => {
  return <SettingsCategoriesView accountbookId={1} />;
};
