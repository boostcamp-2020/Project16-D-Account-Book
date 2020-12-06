import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';
import { users } from '../../../__dummy-data__/components/user-item/user';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const UserItemContainer = (): JSX.Element => {
  return (
    <Container>
      <h3>가계부 구성원 목록</h3>
      {users.map((user) => (
        <UserItem key={user.email} email={user.email} profileUrl={user.profileUrl} nickname={user.nickname} />
      ))}
    </Container>
  );
};

export default UserItemContainer;
