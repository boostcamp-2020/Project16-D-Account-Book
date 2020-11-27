import React from 'react';
import Sidebar from './Sidebar';
import { smallAccountbookitems } from '../../__dummy-data__/dummyData';

export default {
  title: 'sidebar/Sidebar',
  component: Sidebar,
};

export const SidebarDefault = (): JSX.Element => {
  return <Sidebar smallAccountbooks={smallAccountbookitems} />;
};
