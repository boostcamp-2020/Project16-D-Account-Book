import React from 'react';
import HeaderNavigation from './HeaderNavigation';

export default {
  title: 'header-navigation/HeaderNavigation',
  component: HeaderNavigation,
};

export const TransactionPage = (): JSX.Element => {
  return <HeaderNavigation currentPage={'transaction'} />;
};

export const CalendarPage = (): JSX.Element => {
  return <HeaderNavigation currentPage={'calendar'} />;
};

export const statisticsPage = (): JSX.Element => {
  return <HeaderNavigation currentPage={'statistics'} />;
};
