import React from 'react';
import Sidebar from './Sidebar';
import { smallAccountbookItems } from '../../../__dummy-data__/components/smallAccountbookItem/dummyData';

export default {
  title: 'sidebar/Sidebar',
  component: Sidebar,
};

export const SidebarDefault = (): JSX.Element => {
  return <Sidebar smallAccountbooks={smallAccountbookItems} />;
};
