import React, { useEffect } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import { SettingsBody } from '../settings-csv-page/SettingsCsvPage';
import SearchContainer from '../../components/accountbook-social-page/search-bar/SearchContainer';
import UserItemContainer from '../../components/accountbook-social-page/user-item/UserItemContainer';
import socialPage from '../../constants/socialPage';
import useStore from '../../hook/use-store/useStore';
import useGetParam from '../../hook/use-get-param/useGetParam';
import Spinner from '../../components/common/spinner/Spinner';
import { observer } from 'mobx-react';

const SettingsPageWrapper = styled.div``;

const Description = styled.div`
  margin-bottom: 5px;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
`;

const SettingsSocialPage: React.FC = () => {
  const accountbookId = useGetParam();
  const { socialStore, userStore } = useStore().rootStore;
  const isAdmin = userStore.isAdmin(accountbookId);

  useEffect(() => {
    socialStore.findUsers(accountbookId);
  }, []);

  return (
    <SettingsPageWrapper>
      <SettingsSidebar currentpage={'social'} />
      {socialStore.isLoading ? (
        <Spinner />
      ) : (
        <SettingsBody>
          <h2>{socialPage.TITLE}</h2>
          {isAdmin && (
            <>
              <br />
              <Description>{socialPage.DESCRIPTION1}</Description>
              <Description>{socialPage.DESCRIPTION2}</Description>
            </>
          )}
          <ContentWrapper>
            {isAdmin && <SearchContainer />}
            <UserItemContainer />
          </ContentWrapper>
        </SettingsBody>
      )}
    </SettingsPageWrapper>
  );
};

export default observer(SettingsSocialPage);
