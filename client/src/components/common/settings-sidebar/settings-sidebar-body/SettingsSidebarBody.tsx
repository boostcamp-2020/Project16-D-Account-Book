import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY, GRAY, BLUE } from '../../../../constants/color';
import { Link } from 'react-router-dom';
import useGetParam from '../../../../hook/use-get-param/useGetParam';

const SettingsSidebarBodyWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-top: 3em;
`;

interface SettingsSidebarMenuItemProps {
  currentPage: string;
}

const SettingsSidebarMenuItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${LIGHT_GRAY};
    border: 1px solid ${GRAY};
  }
`;

const StyledLink = styled(Link)<SettingsSidebarMenuItemProps>`
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
  }

  &:nth-child(1) {
    color: ${({ currentPage }) => (currentPage == 'accountbook' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'accountbook' ? 'bold' : 'normal')};
  }
  &:nth-child(2) {
    color: ${({ currentPage }) => (currentPage == 'categories' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'categories' ? 'bold' : 'normal')};
  }
  &:nth-child(3) {
    color: ${({ currentPage }) => (currentPage == 'accounts' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'accounts' ? 'bold' : 'normal')};
  }
  &:nth-child(4) {
    color: ${({ currentPage }) => (currentPage == 'social' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'social' ? 'bold' : 'normal')};
  }
  &:nth-child(5) {
    color: ${({ currentPage }) => (currentPage == 'csv' ? BLUE : 'black')};
    font-weight: ${({ currentPage }) => (currentPage == 'csv' ? 'bold' : 'normal')};
  }
`;

interface SettingsSidebarBodyProps {
  currentPage: string;
}

const SettingsSidebarBody = ({ currentPage }: SettingsSidebarBodyProps): JSX.Element => {
  const id = useGetParam();
  return (
    <SettingsSidebarBodyWrapper>
      <StyledLink currentPage={currentPage} to={`/accountbooks/${id}/settings/accountbook`}>
        <SettingsSidebarMenuItem>가계부 설정</SettingsSidebarMenuItem>
      </StyledLink>
      <StyledLink currentPage={currentPage} to={`/accountbooks/${id}/settings/categories`}>
        <SettingsSidebarMenuItem>카테고리 관리</SettingsSidebarMenuItem>
      </StyledLink>
      <StyledLink currentPage={currentPage} to={`/accountbooks/${id}/settings/accounts`}>
        <SettingsSidebarMenuItem>결제수단 관리</SettingsSidebarMenuItem>
      </StyledLink>
      <StyledLink currentPage={currentPage} to={`/accountbooks/${id}/settings/social`}>
        <SettingsSidebarMenuItem>소셜</SettingsSidebarMenuItem>
      </StyledLink>
      <StyledLink currentPage={currentPage} to={`/accountbooks/${id}/settings/csv`}>
        <SettingsSidebarMenuItem>CSV 파일 관리</SettingsSidebarMenuItem>
      </StyledLink>
    </SettingsSidebarBodyWrapper>
  );
};

export default SettingsSidebarBody;
