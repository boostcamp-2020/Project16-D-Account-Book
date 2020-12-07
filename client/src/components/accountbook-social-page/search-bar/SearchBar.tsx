import React from 'react';
import styled from 'styled-components';
import { LIGHT_BLUE, GRAY } from '../../../constants/color';
import SearchIcon from './SearchIcon';

const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const InputText = styled.input.attrs(() => ({
  type: 'text',
  placeholder: '사용자의 이메일을 입력해주세요.',
}))`
  width: 85%;
  padding: 15px 10px;
  font-size: 1rem;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid lightgray;
  outline: none;
`;

const SearchButton = styled.div`
  width: 15%;
  border: 1px solid lightgray;
  border-left: 0px;
  border-radius: 0px 5px 5px 0px;
  background-color: ${GRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const SearchBar = (): JSX.Element => {
  return (
    <SearchBarWrapper>
      <InputText />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
