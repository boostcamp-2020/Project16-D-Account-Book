import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

export default {
  title: 'accountbook-social-page/search-bar/SearchBar',
  component: SearchBar,
};

const Wrapper = styled.div`
  width: 500px;
  cursor: pointer;
`;

export const Default = (): JSX.Element => {
  return <SearchBar />;
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};
