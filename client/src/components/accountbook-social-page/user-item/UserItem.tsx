import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/profile-image/ProfileImage';
import AdminSettingButton from '../admin-setting-button/AdmingSettingButton';
import DeleteButton from '../delete-button/DeleteButton';
import { GRAY } from '../../../constants/color';

const UserItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 0.8rem;
  border-bottom: 1px solid ${GRAY};
`;

const Cell = styled.div`
  width: 15%;
  justify-content: center;
  &:nth-child(1) {
    width: 6%;
    margin-right: 1rem;
  }
  &:nth-child(2) {
    width: 40%;
  }
  &:nth-child(3) {
    width: 17%;
  }
  &:nth-child(4) {
    width: 25%;
  }
  &:nth-child(5) {
    width: 6%;
  }
  &:nth-child(6) {
    width: 6%;
  }
`;

const ButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0 auto;
`;

interface Props {
  email: string;
  nickname: string;
  profileUrl: string;
}

const UserItem = ({ email, nickname, profileUrl }: Props): JSX.Element => {
  return (
    <UserItemWrapper>
      <Cell>
        <ProfileImage src={profileUrl} />
      </Cell>
      <Cell>{email}</Cell>
      <Cell>{nickname}</Cell>
      <Cell />
      <Cell>
        <ButtonWrapper>
          <AdminSettingButton />
        </ButtonWrapper>
      </Cell>
      <Cell>
        <ButtonWrapper>
          <DeleteButton />
        </ButtonWrapper>
      </Cell>
    </UserItemWrapper>
  );
};

export default UserItem;
