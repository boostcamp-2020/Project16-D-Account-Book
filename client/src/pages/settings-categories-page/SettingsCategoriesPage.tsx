import React from 'react';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import SettingsCategoriesView from './SettingsCategoriesView';

interface Props {
  match: match<{ id: string }>;
}

const SettingsCategoriesPageWrapper = styled.div`
  font-family: 'Spoqa Han Sans';
  display: flex;
`;

const SettingsCategoriesPage: React.FC<Props> = ({ match }: Props) => {
  return (
    <SettingsCategoriesPageWrapper>
      <SettingsSidebar currentpage={'categories'} />
      <SettingsCategoriesView accountbookId={Number(match.params.id)} />
    </SettingsCategoriesPageWrapper>
  );
};

export default SettingsCategoriesPage;
