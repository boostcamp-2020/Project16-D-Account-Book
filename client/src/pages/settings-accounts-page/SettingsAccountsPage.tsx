import React from 'react';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import SettingsAccountsView from './SettingsAccountsView';

interface Props {
  match: match<{ id: string }>;
}

const SettingsAccountsPageWrapper = styled.div`
  display: flex;
`;

const SettingsAccountsPage: React.FC<Props> = ({ match }: Props) => {
  return (
    <SettingsAccountsPageWrapper>
      <SettingsSidebar currentPage={'accounts'} />
      <SettingsAccountsView accountbookId={Number(match.params.id)} />
    </SettingsAccountsPageWrapper>
  );
};

export default SettingsAccountsPage;
