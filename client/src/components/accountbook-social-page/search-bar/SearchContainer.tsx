import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import useStore from '../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import UserItem from '../user-item/UserItem';
import socialPage from '../../../constants/socialPage';
import { SearchedUser } from '../../../types/social';
import { RED } from '../../../constants/color';

const Wrapper = styled.div`
  width: 100%;
`;

const SearchedUserWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 5px;
`;

const SearchFail = styled.div`
  color: ${RED};
`;

const SearchContainer = (): JSX.Element => {
  const { socialStore } = useStore().rootStore;

  return (
    <Wrapper>
      <SearchBar />
      {socialStore.searchSuccess === true ? (
        <SearchedUserWrapper>
          <UserItem
            type="search"
            email={(socialStore.searchedUser as SearchedUser).email}
            profileUrl={(socialStore.searchedUser as SearchedUser).profileUrl}
            nickname={(socialStore.searchedUser as SearchedUser).nickname}
            userId={(socialStore.searchedUser as SearchedUser).id}
            userAccountbookId={0}
          />
        </SearchedUserWrapper>
      ) : null}
      {socialStore.searchSuccess === false ? (
        <SearchedUserWrapper>
          <SearchFail>{socialPage.SEARCHING_FAIL_MESSAGE}</SearchFail>
        </SearchedUserWrapper>
      ) : null}
      <SearchedUserWrapper />
    </Wrapper>
  );
};

export default observer(SearchContainer);
