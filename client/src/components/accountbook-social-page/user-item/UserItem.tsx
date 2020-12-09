import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/profile-image/ProfileImage';
import AdminSettingButton from '../admin-setting-button/AdmingSettingButton';
import DeleteButton from '../delete-button/DeleteButton';
import { GRAY, LIGHT_GREEN } from '../../../constants/color';
import AddButton from '../add-button/AddButton';
import useGetParam from '../../../hook/use-get-param/useGetParam';
import useStore from '../../../hook/use-store/useStore';

const UserItemWrapper = styled.div<{ type: string | undefined }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 0.8rem;
  border-bottom: 1px solid ${GRAY};
  color: ${({ type }) => (type === 'admin' ? LIGHT_GREEN : 'black')};
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
  margin: 0 auto;
  svg {
    cursor: pointer;
  }
`;

interface Props {
  email: string;
  nickname: string;
  profileUrl: string;
  id: number;
  type?: string;
}

const UserItem = ({ email, nickname, profileUrl, type, id }: Props): JSX.Element => {
  const accountbookId = useGetParam();
  const { socialStore } = useStore().rootStore;

  const onClickAdd = () => {
    socialStore.addUser({ accountbookId, userId: id });
  };

  const onClickDelete = () => {
    socialStore.deleteUser({ accountbookId, userId: id });
  };

  const firstButton = () => {
    if (type === 'user') {
      return <AdminSettingButton />;
    }
    return <></>;
  };

  const secondButton = () => {
    if (type === 'user') {
      return <DeleteButton onClick={onClickDelete} />;
    }
    if (type === 'search') {
      return <AddButton onClick={onClickAdd} />;
    }
    return <></>;
  };

  return (
    <UserItemWrapper type={type}>
      <Cell>
        <ProfileImage src={profileUrl} />
      </Cell>
      <Cell>{email}</Cell>
      <Cell>{nickname}</Cell>
      <Cell />
      <Cell>
        <ButtonWrapper>{firstButton()}</ButtonWrapper>
      </Cell>
      <Cell>
        <ButtonWrapper>{secondButton()}</ButtonWrapper>
      </Cell>
    </UserItemWrapper>
  );
};

export default UserItem;
