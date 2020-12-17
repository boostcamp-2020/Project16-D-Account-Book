import React from 'react';
import styled from 'styled-components';
import ProfileDropdown from '../profile-dropdown/ProfileDropdown';
import { BLUE } from '../../../constants/color';
import { Link } from 'react-router-dom';
import useGetParam from '../../../hook/use-get-param/useGetParam';

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  top: 2%;
  width: 190px;
  margin-right: -20px;
`;

const NavigationItem = styled.div<{ currentPage: string }>`
  width: 34%;
  text-align: center;
  font-family: 'Spoqa Han Sans';
  font-size: 1.2rem;
  margin-right: 15px;
  &:nth-child(1) a {
    color: ${({ currentPage }) => (currentPage == 'transaction' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'transaction' ? 'bold' : 'normal')};
  }
  &:nth-child(2) a {
    color: ${({ currentPage }) => (currentPage == 'statistics' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'statistics' ? 'bold' : 'normal')};
    margin-right: 12px;
  }
  &:nth-child(3) a {
    width: 40%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  .text {
    cursor: pointer;
  }
`;

interface HeaderNavigationProps {
  currentPage: string;
}

const HeaderNavigation = ({ currentPage }: HeaderNavigationProps): JSX.Element => {
  const id = useGetParam();
  return (
    <NavigationWrapper>
      <NavigationItem currentPage={currentPage}>
        <Link to={`/accountbooks/${id}`} className="text">
          <span className="text">내역</span>
        </Link>
      </NavigationItem>
      <NavigationItem currentPage={currentPage}>
        <Link to={`/accountbooks/${id}/statistics`} className="text">
          <span className="text">통계</span>
        </Link>
      </NavigationItem>
      <NavigationItem currentPage={''}>
        <ProfileDropdown />
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default HeaderNavigation;
