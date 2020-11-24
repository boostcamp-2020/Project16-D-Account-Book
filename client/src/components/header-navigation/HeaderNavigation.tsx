import React from 'react';
import Styled from 'styled-components';
import ProfileImage from '../profile-image/ProfileImage';

const NavigationWrapper = Styled.div`
  display: flex;
  width: 200px;
  hgieht: 50px;
  border: 1px solid black;
`;

const NavigationItem = Styled.div`
  width: 24%;
  padding-top: 4px;
  text-align: center;
  &:nth-child(4) {
    width: 28%;
    display: flex;
    flex-direction: row-reverse;
    padding: 0;
  }
`;

const sampleProfileImage =
  'https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=6&m=1033334196&s=170667a&w=0&h=wijawNlDG-1XWl-uXkYPKfJCv4mlNHb_QkqgtMwNSHY=';

const HeaderNavigation = (): JSX.Element => {
  return (
    <NavigationWrapper>
      <NavigationItem>내역</NavigationItem>
      <NavigationItem>달력</NavigationItem>
      <NavigationItem>통계</NavigationItem>
      <NavigationItem>
        <ProfileImage src={sampleProfileImage} />
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default HeaderNavigation;
