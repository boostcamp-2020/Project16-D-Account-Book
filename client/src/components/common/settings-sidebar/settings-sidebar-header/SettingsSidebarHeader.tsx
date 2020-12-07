import React from 'react';
import styled from 'styled-components';
import ModalBackButton from '../../back-button/ModalBackButton';

interface SettingsSidebarHeaderProps {
  goToPreviousPage?: () => void;
}

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const BackButtonWrapper = styled.div`
  cursor: pointer;
  width: 1.3em;
  margin-right: 2.5em;
  margin-left: 0.3em;
`;

const SettingsTitle = styled.div`
  padding-top: 0.3em;
  font-size: 1.3rem;
`;

const SettingsSidebarHeader = ({ goToPreviousPage }: SettingsSidebarHeaderProps): JSX.Element => {
  return (
    <SidebarHeader>
      <BackButtonWrapper>
        <ModalBackButton onClick={goToPreviousPage} />
      </BackButtonWrapper>
      <SettingsTitle>가계부 관리</SettingsTitle>
    </SidebarHeader>
  );
};

export default SettingsSidebarHeader;
