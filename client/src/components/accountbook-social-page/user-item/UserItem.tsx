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
import socialPage from '../../../constants/socialPage';

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
    width: 45%;
  }
  &:nth-child(3) {
    width: 12%;
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
  provider: string;
  email: string;
  nickname?: string;
  profileUrl: string;
  userId: number;
  type?: string;
  userAccountbookId: number;
}

const UserItem = ({ email, profileUrl, type, userId, userAccountbookId, provider }: Props): JSX.Element => {
  const accountbookId = useGetParam();
  const { socialStore, userStore } = useStore().rootStore;
  const isAdmin = userStore.isAdmin(accountbookId);

  const onClickAdd = () => {
    if (confirm(socialPage.ADD_CONFIRM_MESSAGE)) {
      socialStore.addUser({ accountbookId, userId });
    }
  };

  const onClickDelete = () => {
    if (confirm(socialPage.DELETE_CONFIRM_MESSAGE)) {
      socialStore.deleteUser({ accountbookId, userId });
    }
  };

  const onClickAdminSetting = () => {
    if (confirm(socialPage.GIVE_ADMIN_CONFIRM_MESSAGE)) {
      socialStore.giveAdmin(userAccountbookId, 1, accountbookId);
    }
  };

  const firstButton = () => {
    if (type === 'user' && isAdmin) {
      return <AdminSettingButton onClick={onClickAdminSetting} />;
    }
    return <></>;
  };

  const secondButton = () => {
    if (type === 'user' && isAdmin) {
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
      <Cell>{provider}</Cell>
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
