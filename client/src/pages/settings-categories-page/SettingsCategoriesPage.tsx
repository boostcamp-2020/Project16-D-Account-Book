import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import useStore from '../../hook/use-store/useStore';
import SettingsCategoriesView from './SettingsCategoriesView';

interface Props {
  match: match<{ id: string }>;
}

const SettingsCategoriesPageWrapper = styled.div`
  display: flex;
`;

const SettingsCategoriesPage: React.FC<Props> = ({ match }: Props) => {
  const { rootStore } = useStore();

  useEffect(() => {
    rootStore.categoryStore.updateIncomeCategories(Number(match.params.id));
    rootStore.categoryStore.updateExpenditureCategories(Number(match.params.id));
  }, []);

  return (
    <SettingsCategoriesPageWrapper>
      <SettingsSidebar currentPage={'categories'} />
      <SettingsCategoriesView accountbookId={Number(match.params.id)} />
    </SettingsCategoriesPageWrapper>
  );
};

export default SettingsCategoriesPage;
