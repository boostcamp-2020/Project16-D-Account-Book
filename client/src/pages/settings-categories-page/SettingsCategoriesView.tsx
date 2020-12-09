import React, { useEffect } from 'react';
import styled from 'styled-components';
import Category from '../../components/common/category/Category';
import AddCategoryButton from '../../components/common/add-category-button/AddCategoryButton';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import FormModalCategory from '../../components/common/modals/form-modal-category/FormModalCreateCategory';
import FormModalUpdateCategory from '../../components/common/modals/form-modal-category/FormModalUpdateCategory';

const SettingsCategoryViewWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 25%;
  padding: 50px 50px;
`;

const SettingsItemWrapper = styled.div`
  width: 50vw;
  margin-bottom: 5vh;
`;

const Label = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2vh;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItemWrapper = styled.div`
  width: 20%;
  margin-bottom: 3vh;
  margin-right: 2vw;
  cursor: pointer;
`;

interface Props {
  accountbookId: number;
}

const SettingsCategoriesView: React.FC<Props> = ({ accountbookId }: Props) => {
  const { rootStore } = useStore();
  const { categoryStore } = rootStore;
  const createCategoryFormStore = rootStore.modalStore.createCategoryFormStore;
  const updateCategoryFormStore = rootStore.modalStore.updateCategoryFormStore;

  useEffect(() => {
    categoryStore.updateIncomeCategories(accountbookId);
    categoryStore.updateExpenditureCategories(accountbookId);
  }, []);

  const setCategoryIncomeFlagTrue = (): void => {
    updateCategoryFormStore.setIncomeFlagTrue();
  };

  const setCategoryIncomeFlagFalse = (): void => {
    updateCategoryFormStore.setIncomeFlagFalse();
  };

  const ExpenditureCategoryItems = categoryStore.expenditureCategories.map((item) => (
    <CategoryItemWrapper key={item.id}>
      <Category
        key={item.id}
        id={item.id}
        name={item.name}
        color={item.color}
        shadow={true}
        onClick={setCategoryIncomeFlagFalse}
      />
    </CategoryItemWrapper>
  ));

  const IncomeCategoryItems = categoryStore.incomeCategories.map((item) => (
    <CategoryItemWrapper key={item.id}>
      <Category
        key={item.id}
        id={item.id}
        name={item.name}
        color={item.color}
        shadow={true}
        onClick={setCategoryIncomeFlagTrue}
      />
    </CategoryItemWrapper>
  ));

  const setIncomeFlagTrue = (): void => {
    createCategoryFormStore.setIncomeFlagTrue();
  };

  const setIncomeFlagFalse = (): void => {
    createCategoryFormStore.setIncomeFlagFalse();
  };

  return (
    <SettingsCategoryViewWrapper>
      <FormModalCategory />
      <FormModalUpdateCategory />
      <SettingsItemWrapper>
        <Label>지출</Label>
        <CategoryWrapper>
          <CategoryItemWrapper>
            <AddCategoryButton onClick={setIncomeFlagFalse} />
          </CategoryItemWrapper>
          {ExpenditureCategoryItems}
        </CategoryWrapper>
      </SettingsItemWrapper>
      <SettingsItemWrapper>
        <Label>수입</Label>
        <CategoryWrapper>
          <CategoryItemWrapper>
            <AddCategoryButton onClick={setIncomeFlagTrue} />
          </CategoryItemWrapper>
          {IncomeCategoryItems}
        </CategoryWrapper>
      </SettingsItemWrapper>
    </SettingsCategoryViewWrapper>
  );
};

export default observer(SettingsCategoriesView);
