import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../profile-image/ProfileImage';
import { GRAY, LIGHT_GRAY } from '../../../constants/color';

interface ProfileDropdownProps {
  src: string;
}

const Menu = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: ${LIGHT_GRAY};
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

const ProfileDropdown = ({ src }: ProfileDropdownProps): JSX.Element => {
  return (
    <ProfileDropdownWrapper>
      <ProfileImage src={src} />
      <DropdownWrapper>
        <Menu href="#">프로필 설정</Menu>
        <Menu href="#">로그아웃</Menu>
      </DropdownWrapper>
    </ProfileDropdownWrapper>
  );
};

export default ProfileDropdown;
