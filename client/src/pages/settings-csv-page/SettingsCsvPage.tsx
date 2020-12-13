import React from 'react';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import SettingsCsvView from './SettingsCsvView';

interface Props {
  match: match<{ id: string }>;
}

const SettingsCsvPageWrapper = styled.div`
  display: flex;
`;

export const SettingsBody = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  padding: 50px 50px;
  min-width: 550px;
`;

const SettingsCsvPage: React.FC<Props> = ({ match }: Props) => {
  return (
    <SettingsCsvPageWrapper>
      <SettingsSidebar currentpage={'csv'} />
      <SettingsCsvView accountbookId={Number(match.params.id)} />
    </SettingsCsvPageWrapper>
  );
};

export default SettingsCsvPage;
