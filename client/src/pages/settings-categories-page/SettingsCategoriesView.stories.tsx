import React from 'react';
import SettingsCategoriesView from './SettingsCategoriesView';
import { RootProvider } from '../../store/RootStore';

export default {
  title: 'pages/settings-page/SettingsCategoriesPage',
  component: SettingsCategoriesView,
};

export const Default: React.FC = () => {
  return (
    <RootProvider>
      <SettingsCategoriesView accountbookId={1} />
    </RootProvider>
  );
};
