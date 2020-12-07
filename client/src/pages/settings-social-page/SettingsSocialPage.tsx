import React from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import { SettingsBody } from '../settings-csv-page/SettingsCsvPage';
import SearchBar from '../../components/accountbook-social-page/search-bar/SearchBar';
import UserItemContainer from '../../components/accountbook-social-page/user-item/UserItemContainer';
import socialPage from '../../constants/socialPage';

const SettingsPageWrapper = styled.div``;

const Description = styled.div`
  margin-bottom: 5px;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
`;

const SearchedUserWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

const SettingsSocialPage: React.FC = () => {
  return (
    <SettingsPageWrapper>
      <SettingsSidebar currentPage={'social'} />
      <SettingsBody>
        <h2>{socialPage.TITLE}</h2>
        <br />
        <Description>{socialPage.DESCRIPTION1}</Description>
        <Description>{socialPage.DESCRIPTION2}</Description>
        <ContentWrapper>
          <SearchBar />
          <SearchedUserWrapper></SearchedUserWrapper>
          <UserItemContainer />
        </ContentWrapper>
      </SettingsBody>
    </SettingsPageWrapper>
  );
};

export default SettingsSocialPage;
