import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import { observer } from 'mobx-react';
import useStore from '../../../hook/use-store/useStore';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const UserItemContainer = (): JSX.Element => {
  const { socialStore } = useStore().rootStore;

  return (
    <Container>
      <h3>가계부 구성원 목록</h3>
      {socialStore.userAccountbooks?.map((userAccountbook) => (
        <UserItem
          provider={userAccountbook.user.provider}
          userAccountbookId={userAccountbook.id}
          userId={userAccountbook.user.id}
          key={userAccountbook.user.email}
          email={userAccountbook.user.email}
          profileUrl={userAccountbook.user.profileUrl}
          nickname={userAccountbook.user.nickname}
          type={userAccountbook.authority ? 'admin' : 'user'}
        />
      ))}
    </Container>
  );
};

export default observer(UserItemContainer);
