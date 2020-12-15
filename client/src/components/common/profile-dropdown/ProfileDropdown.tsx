import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../profile-image/ProfileImage';
import { GRAY, LIGHT_GRAY } from '../../../constants/color';
import useStore from '../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import authService from '../../../services/auth';

const Menu = styled.div`
  color: black;
  padding: 12px 16px;
  display: block;

  &:hover {
    background-color: ${LIGHT_GRAY};
    cursor: pointer;
  }
`;

const DropdownWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: ${GRAY};
  min-width: 160px;
  box-shadow: 0px 4px 8px 0px;
  z-index: 1;
`;

const ProfileDropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownWrapper} {
    display: block;
  }
`;

const ProfileDropdown = (): JSX.Element => {
  const { userStore } = useStore().rootStore;

  const logout = async () => {
    const responseStatus = await authService.logout();
    if (responseStatus === 200) {
      userStore.deleteUser();
      window.location.href = '/login';
      window.sessionStorage.clear();
    }
  };

  return (
    <ProfileDropdownWrapper>
      <ProfileImage src={userStore.profileUrl} />
      <DropdownWrapper>
        <Menu onClick={logout}>로그아웃</Menu>
      </DropdownWrapper>
    </ProfileDropdownWrapper>
  );
};

export default observer(ProfileDropdown);
