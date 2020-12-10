import React from 'react';
import AccountbookCard from './AccountbookCard';

export default {
  title: 'Accountbook-Selection-Page/AccountbookCard',
  component: AccountbookCard,
};

export const WhiteTextAccountbookCard = (): JSX.Element => {
  return <AccountbookCard id={1} name={'가계부1'} color={'#000000'} description={'가계부1 설명'} />;
};

export const BlackTextAccountbookCard = (): JSX.Element => {
  return <AccountbookCard id={2} name={'가계부2'} color={'#E0F8EC'} description={'가계부2 설명'} />;
};

export const BlueBackgroundAccountbookCard = (): JSX.Element => {
  return <AccountbookCard id={3} name={'가계부2'} color={'#1EA7FD'} description={'가계부3 설명'} />;
};

export const RedBackgroundAccountbookCard = (): JSX.Element => {
  return <AccountbookCard id={4} name={'가계부2'} color={'#F35454'} description={'가계부4 설명'} />;
};

export const LongTextAccountbookCard = (): JSX.Element => {
  return (
    <AccountbookCard
      id={5}
      name={'가계부가계부가계부가계부가계부'}
      color={'#E0F8EC'}
      description={'30자맞춘테스트설명30자맞춘테스트설명30자맞춘테스트설명'}
    />
  );
};
