import React from 'react';
import Account from './Account';

export default {
  title: 'account/Account',
  component: Account,
};

export const AccountDefault = (): JSX.Element => {
  return <Account id={1} name={'우리카드'} color={'#000000'} />;
};
