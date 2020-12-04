import React from 'react';
import Account from './Account';

export default {
  title: 'account/Account',
  component: Account,
};

export const AccountDefault = (): JSX.Element => {
  return <Account text={'우리카드'} bgColor={'#000000'} />;
};
