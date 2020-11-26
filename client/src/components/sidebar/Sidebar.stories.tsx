import React, { useState } from 'react';
import Sidebar from './Sidebar';
import HamburgerButton from '../hamburger-button/HamburgerButton';
import { smallAccountbookitems } from '../../utils/dummyData';

export default {
  title: 'sidebar/Sidebar',
  component: Sidebar,
};

export const SidebarDefault = (): JSX.Element => {
  return <Sidebar smallAccountbooks={smallAccountbookitems} />;
};
