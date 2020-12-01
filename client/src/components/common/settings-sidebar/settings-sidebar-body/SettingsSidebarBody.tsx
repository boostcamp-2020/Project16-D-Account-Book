import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY, GRAY } from '../../../../constants/color';

const SettingsSidebarBodyWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  padding-top: 3em;
`;

const SettingsSidebarMenuItem = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
  &:hover {
    background-color: ${LIGHT_GRAY};
    border: 1px solid ${GRAY};
  }
`;

const SettingsSidebarBody = (): JSX.Element => {
  return (
    <SettingsSidebarBodyWrapper>
      <SettingsSidebarMenuItem>가계부 설정</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem>카테고리 관리</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem>결제수단 관리</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem>소셜</SettingsSidebarMenuItem>
      <SettingsSidebarMenuItem>CSV 파일 관리</SettingsSidebarMenuItem>
    </SettingsSidebarBodyWrapper>
  );
};

export default SettingsSidebarBody;
