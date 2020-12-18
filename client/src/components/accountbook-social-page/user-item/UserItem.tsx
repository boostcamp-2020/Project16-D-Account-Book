import React from 'react';
import styled from 'styled-components';
import AdminSettingButton from '../admin-setting-button/AdminSettingButton';
import DeleteButton from '../delete-button/DeleteButton';
import { GRAY, LIGHT_GREEN } from '../../../constants/color';
import AddButton from '../add-button/AddButton';
import useGetParam from '../../../hook/use-get-param/useGetParam';
import useStore from '../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import socialPage from '../../../constants/socialPage';
import KakaoLogo from '../../provider-logo/KakaoLogo';
import NaverLogo from '../../provider-logo/NaverLogo';

const UserItemWrapper = styled.div<{ type: string | undefined }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 0.8rem;
  border-bottom: 1px solid ${GRAY};
  color: ${({ type }) => (type === 'admin' ? LIGHT_GREEN : 'black')};
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const Cell = styled.div`
  width: 15%;
  justify-content: center;
  &:nth-child(1) {
    width: 6%;
    margin-right: 1rem;
  }
  &:nth-child(2) {
    padding-top: 0.4rem;

    width: 45%;
  }
  &:nth-child(3) {
    padding-top: 0.4rem;

    width: 12%;
  }
  &:nth-child(4) {
    padding-top: 0.4rem;

    width: 25%;
  }
  &:nth-child(5) {
    padding-top: 0.4rem;

    width: 6%;
  }
  &:nth-child(6) {
    padding-top: 0.4rem;

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
  const { confirmStore } = useStore().rootStore.modalStore;
  const isAdmin = userStore.isAdmin(accountbookId);

  const onClickAdd = () => {
    confirmStore.confirm({
      text: socialPage.ADD_CONFIRM_MESSAGE,
      callback: () => {
        socialStore.addUser({ accountbookId, userId });
      },
    });
  };

  const onClickDelete = () => {
    confirmStore.confirm({
      text: socialPage.DELETE_CONFIRM_MESSAGE,
      callback: () => {
        socialStore.deleteUser({ accountbookId, userId });
      },
    });
  };

  const onClickAdminSetting = () => {
    confirmStore.confirm({
      text: [socialPage.GIVE_ADMIN_CONFIRM_MESSAGE1, socialPage.GIVE_ADMIN_CONFIRM_MESSAGE2],
      callback: () => {
        socialStore.giveAdmin(userAccountbookId, 1, accountbookId);
      },
    });
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
      <Cell>{provider === 'naver' ? <NaverLogo /> : <KakaoLogo />}</Cell>
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
