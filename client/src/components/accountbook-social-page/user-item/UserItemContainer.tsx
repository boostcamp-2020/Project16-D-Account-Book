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
  const userAccountbooks = socialStore.userAccountbooks;
  const admin = userAccountbooks[0];

  return (
    <Container>
      <h3>가계부 구성원 목록</h3>
      {admin && (
        <UserItem
          key={admin.user.email}
          email={admin.user.email}
          profileUrl={admin.user.profileUrl}
          nickname={admin.user.nickname}
          type="admin"
        />
      )}

      {socialStore.userAccountbooks?.slice(1).map((userAccountbook) => (
        <UserItem
          key={userAccountbook.user.email}
          email={userAccountbook.user.email}
          profileUrl={userAccountbook.user.profileUrl}
          nickname={userAccountbook.user.nickname}
          type="user"
        />
      ))}
    </Container>
  );
};

export default observer(UserItemContainer);
