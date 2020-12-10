import React from 'react';
import styled from 'styled-components';
import AccountbookCard from './AccountbookCard';

export default {
  title: 'Accountbook-Selection-Page/AccountbookCard',
  component: AccountbookCard,
};

const ViewWrapper = styled.div`
  width: 40%;
  padding-top: 5%;
  margin: 0 auto;
`;

export const WhiteTextAccountbookCard = (): JSX.Element => {
  return (
    <ViewWrapper>
      <AccountbookCard id={1} title={'가계부1'} color={'#000000'} description={'가계부1 설명'} />
    </ViewWrapper>
  );
};

export const BlackTextAccountbookCard = (): JSX.Element => {
  return (
    <ViewWrapper>
      <AccountbookCard id={2} title={'가계부2'} color={'#E0F8EC'} description={'가계부2 설명'} />
    </ViewWrapper>
  );
};

export const BlueBackgroundAccountbookCard = (): JSX.Element => {
  return (
    <ViewWrapper>
      <AccountbookCard id={3} title={'가계부3'} color={'#1EA7FD'} description={'가계부3 설명'} />
    </ViewWrapper>
  );
};

export const RedBackgroundAccountbookCard = (): JSX.Element => {
  return (
    <ViewWrapper>
      <AccountbookCard id={4} title={'가계부4'} color={'#F35454'} description={'가계부4 설명'} />
    </ViewWrapper>
  );
};

export const LongTextAccountbookCard = (): JSX.Element => {
  return (
    <ViewWrapper>
      <AccountbookCard
        id={5}
        title={'가계부가계부가계부가계부가계부'}
        color={'#E0F8EC'}
        description={'30자맞춘테스트설명30자맞춘테스트설명30자맞춘테스트설명'}
      />
    </ViewWrapper>
  );
};
