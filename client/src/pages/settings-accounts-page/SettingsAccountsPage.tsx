import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import useStore from '../../hook/use-store/useStore';
import SettingsAccountsView from './SettingsAccountsView';

interface Props {
  match: match<{ id: string }>;
}

const SettingsAccountsPageWrapper = styled.div`
  display: flex;
`;

const SettingsAccountsPage: React.FC<Props> = ({ match }: Props) => {
  const { rootStore } = useStore();

  useEffect(() => {
    rootStore.accountStore.updateAccounts(Number(match.params.id));
  }, []);

  return (
    <SettingsAccountsPageWrapper>
      <SettingsSidebar currentPage={'accounts'} />
      <SettingsAccountsView accountbookId={Number(match.params.id)} />
    </SettingsAccountsPageWrapper>
  );
};

export default SettingsAccountsPage;
