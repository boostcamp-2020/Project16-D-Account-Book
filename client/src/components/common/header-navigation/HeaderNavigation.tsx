import React from 'react';
import styled from 'styled-components';
import ProfileDropdown from '../profile-dropdown/ProfileDropdown';
import { BLUE } from '../../../constants/color';

const NavigationWrapper = styled.div`
  display: flex;
  width: 200px;
`;

const NavigationItem = styled.div<{ currentPage: string }>`
  width: 24%;
  padding-top: 4px;
  text-align: center;
  &:nth-child(1) {
    color: ${({ currentPage }) => (currentPage == 'transaction' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'transaction' ? 'bold' : 'normal')};
  }
  &:nth-child(2) {
    color: ${({ currentPage }) => (currentPage == 'calendar' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'calendar' ? 'bold' : 'normal')};
  }
  &:nth-child(3) {
    color: ${({ currentPage }) => (currentPage == 'statistics' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'statistics' ? 'bold' : 'normal')};
  }
  &:nth-child(4) {
    width: 28%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0;
  }
  .text {
    cursor: pointer;
  }
`;

const sampleProfileImage =
  'https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=6&m=1033334196&s=170667a&w=0&h=wijawNlDG-1XWl-uXkYPKfJCv4mlNHb_QkqgtMwNSHY=';

interface HeaderNavigationProps {
  currentPage: string;
}

const HeaderNavigation = ({ currentPage }: HeaderNavigationProps): JSX.Element => {
  return (
    <NavigationWrapper>
      <NavigationItem currentPage={currentPage}>
        <span className="text">내역</span>
      </NavigationItem>
      <NavigationItem currentPage={currentPage}>
        <span className="text">달력</span>
      </NavigationItem>
      <NavigationItem currentPage={currentPage}>
        <span className="text">통계</span>
      </NavigationItem>
      <NavigationItem currentPage={''}>
        <ProfileDropdown src={sampleProfileImage} />
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default HeaderNavigation;
