import React from 'react';
import FilterButton from './filter-button/FilterButton';
import CreateButton from './create-button/CreateButton';
import SettingButton from './setting-button/SettingButton';
import styled from 'styled-components';
import useStore from '../../../hook/use-store/useStore';
import useGetParam from '../../../hook/use-get-param/useGetParam';
import { useHistory } from 'react-router-dom';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 40px;
  height: 140px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  &:nth-child(3) {
    margin: 0;
  }
`;

const MenuNavigation: React.FC = () => {
  const { rootStore } = useStore();
  const createTransactionForm = rootStore.modalStore.createTransactionFormStore;
  const accountbookId = useGetParam();
  const history = useHistory();

  const openCreateTransactionForm = (): void => {
    createTransactionForm.toggleShow();
  };

  return (
    <NavigationWrapper>
      <ButtonWrapper>
        <FilterButton width={24} height={24} />
      </ButtonWrapper>
      <ButtonWrapper onClick={() => history.push(`/accountbooks/${accountbookId}/settings/accountbook`)}>
        <SettingButton width={24} height={24} />
      </ButtonWrapper>
      <ButtonWrapper onClick={openCreateTransactionForm}>
        <CreateButton width={24} height={24} />
      </ButtonWrapper>
    </NavigationWrapper>
  );
};

export default MenuNavigation;
