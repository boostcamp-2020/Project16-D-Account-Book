import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY, GRAY, BLUE } from '../../../../constants/color';
import { useHistory } from 'react-router-dom';
import useGetParam from '../../../../hook/use-get-param/useGetParam';

const SettingsSidebarBodyWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-top: 3em;
`;

interface SettingsSidebarMenuItemProps {
  currentpage: string;
}

const SettingsSidebarMenuItem = styled.div<SettingsSidebarMenuItemProps>`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${LIGHT_GRAY};
    border: 1px solid ${GRAY};
  }
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
  }

  &:nth-child(1) {
    color: ${({ currentpage }) => (currentpage == 'accountbook' ? BLUE : 'black')};
    font-weight: ${({ currentpage }) => (currentpage == 'accountbook' ? 'bold' : 'normal')};
  }
  &:nth-child(2) {
    color: ${({ currentpage }) => (currentpage == 'categories' ? BLUE : 'black')};
    font-weight: ${({ currentpage }) => (currentpage == 'categories' ? 'bold' : 'normal')};
  }
  &:nth-child(3) {
    color: ${({ currentpage }) => (currentpage == 'accounts' ? BLUE : 'black')};
    font-weight: ${({ currentpage }) => (currentpage == 'accounts' ? 'bold' : 'normal')};
  }
  &:nth-child(4) {
    color: ${({ currentpage }) => (currentpage == 'social' ? BLUE : 'black')};
    font-weight: ${({ currentpage }) => (currentpage == 'social' ? 'bold' : 'normal')};
  }
  &:nth-child(5) {
    color: ${({ currentpage }) => (currentpage == 'csv' ? BLUE : 'black')};
    font-weight: ${({ currentpage }) => (currentpage == 'csv' ? 'bold' : 'normal')};
  }
`;

interface SettingsSidebarBodyProps {
  currentpage: string;
}

const SettingsSidebarBody = ({ currentpage }: SettingsSidebarBodyProps): JSX.Element => {
  const id = useGetParam();
  const history = useHistory();

  return (
    <SettingsSidebarBodyWrapper>
      <SettingsSidebarMenuItem
        currentpage={currentpage}
        onClick={() => history.replace(`/accountbooks/${id}/settings/accountbook`)}
      >
        가계부 설정
      </SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem
        currentpage={currentpage}
        onClick={() => history.replace(`/accountbooks/${id}/settings/categories`)}
      >
        카테고리 관리
      </SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem
        currentpage={currentpage}
        onClick={() => history.replace(`/accountbooks/${id}/settings/accounts`)}
      >
        결제수단 관리
      </SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem
        currentpage={currentpage}
        onClick={() => history.replace(`/accountbooks/${id}/settings/social`)}
      >
        소셜
      </SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem
        currentpage={currentpage}
        onClick={() => history.replace(`/accountbooks/${id}/settings/csv`)}
      >
        CSV 파일 관리
      </SettingsSidebarMenuItem>
    </SettingsSidebarBodyWrapper>
  );
};

export default SettingsSidebarBody;
