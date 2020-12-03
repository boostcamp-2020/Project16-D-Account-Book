import React, { useState } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import ExportButton from '../../components/export-button/ExportButton';
import ImportButton from '../../components/import-button/ImportButton';

const SettingsCsvPageWrapper = styled.div`
  display: flex;
`;

const SettingsBody = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  padding: 50px 50px;
`;

const SettingsItemWrapper = styled.div`
  width: 70vw;
  margin-top: 50px;
  margin-bottom: 25vh;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 4vh;
  display: flex;
`;

const Content = styled.p`
  margin: 0 0 0.5vh 0;
  font-size: 1.1rem;
`;

const SettingsCsvPage = (): JSX.Element => {
  return (
    <SettingsCsvPageWrapper>
      <SettingsSidebar currentPage={'csv'} />
      <SettingsBody>
        <SettingsItemWrapper>
          <Label>
            데이터 내보내기
            <ExportButton />
          </Label>
          <Content>현재 선택한 가계부에 기록되어 있는 거래 내역을 CSV 파일로 생성하여 다운받으실 수 있습니다.</Content>
        </SettingsItemWrapper>
        <SettingsItemWrapper>
          <Label>
            데이터 불러오기
            <ImportButton />
          </Label>
          <Content>선택한 CSV 파일 내용을 현재 가계부 내용에 추가하실 수 있습니다.</Content>
          <Content>단, CSV 파일은 다음의 형식을 지켜야 합니다.</Content>
        </SettingsItemWrapper>
      </SettingsBody>
    </SettingsCsvPageWrapper>
  );
};

export default SettingsCsvPage;
