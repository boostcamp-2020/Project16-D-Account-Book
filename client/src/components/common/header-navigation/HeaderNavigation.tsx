import React from 'react';
import styled from 'styled-components';
import ProfileDropdown from '../profile-dropdown/ProfileDropdown';
import { BLUE } from '../../../constants/color';
import { Link } from 'react-router-dom';
import useGetParam from '../../../hook/use-get-param/useGetParam';

const NavigationWrapper = styled.div`
  display: flex;
  width: 200px;
`;

const NavigationItem = styled.div<{ currentPage: string }>`
  width: 24%;
  padding-top: 4px;
  text-align: center;
  &:nth-child(1) a {
    color: ${({ currentPage }) => (currentPage == 'transaction' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'transaction' ? 'bold' : 'normal')};
  }
  &:nth-child(2) a {
    color: ${({ currentPage }) => (currentPage == 'calendar' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'calendar' ? 'bold' : 'normal')};
  }
  &:nth-child(3) a {
    color: ${({ currentPage }) => (currentPage == 'statistics' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'statistics' ? 'bold' : 'normal')};
  }
  &:nth-child(4) a {
    width: 28%;
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

const sampleProfileImage =
  'https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=6&m=1033334196&s=170667a&w=0&h=wijawNlDG-1XWl-uXkYPKfJCv4mlNHb_QkqgtMwNSHY=';

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
        <Link to={`/accountbooks/${id}/test`} className="text">
          <span className="text">달력</span>
        </Link>
      </NavigationItem>
      <NavigationItem currentPage={currentPage}>
        <Link to={`/accountbooks/${id}/statistics`} className="text">
          <span className="text">통계</span>
        </Link>
      </NavigationItem>
      <NavigationItem currentPage={''}>
        <ProfileDropdown src={sampleProfileImage} />
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default HeaderNavigation;
