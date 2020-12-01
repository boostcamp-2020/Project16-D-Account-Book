import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY, GRAY, BLUE } from '../../../../constants/color';

const SettingsSidebarBodyWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  padding-top: 3em;
`;

const SettingsSidebarMenuItem = styled.div<{ currentPage: string }>`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;

  &:hover {
    background-color: ${LIGHT_GRAY};
    border: 1px solid ${GRAY};
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
  return (
    <SettingsSidebarBodyWrapper>
      <SettingsSidebarMenuItem currentPage={currentPage}>가계부 설정</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem currentPage={currentPage}>카테고리 관리</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem currentPage={currentPage}>결제수단 관리</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem currentPage={currentPage}>소셜</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem currentPage={currentPage}>CSV 파일 관리</SettingsSidebarMenuItem>
    </SettingsSidebarBodyWrapper>
  );
};

export default SettingsSidebarBody;
