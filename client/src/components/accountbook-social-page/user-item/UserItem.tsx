import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../common/profile-image/ProfileImage';
import AdminSettingButton from '../admin-setting-button/AdmingSettingButton';
import DeleteButton from '../delete-button/DeleteButton';
import { GRAY, LIGHT_GREEN } from '../../../constants/color';
import AddButton from '../add-button/AddButton';
import useGetParam from '../../../hook/use-get-param/useGetParam';
import useStore from '../../../hook/use-store/useStore';
import { observer } from 'mobx-react';

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
  userId: number;
  type?: string;
  userAccountbookId: number;
}

const UserItem = ({ email, nickname, profileUrl, type, userId, userAccountbookId }: Props): JSX.Element => {
  const accountbookId = useGetParam();
  const { socialStore, userStore } = useStore().rootStore;

  const onClickAdd = () => {
    socialStore.addUser({ accountbookId, userId });
  };

  const onClickDelete = () => {
    socialStore.deleteUser({ accountbookId, userId });
  };

  const onClickAdminSetting = () => {
    if (confirm('관리자 권한을 위임하시겠습니까? 위임한 이후에 관리자 권한을 잃게됩니다.')) {
      socialStore.giveAdmin(userAccountbookId, 1);
    }
  };

  const firstButton = () => {
    if (type === 'user' && userStore.isAdmin === true) {
      return <AdminSettingButton onClick={onClickAdminSetting} />;
    }
    return <></>;
  };

  const secondButton = () => {
    if (type === 'user' && userStore.isAdmin === true) {
      return <DeleteButton onClick={onClickDelete} />;
    }
    if (type === 'search' && userStore.isAdmin === true) {
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

export default observer(UserItem);
