import React, { useEffect } from 'react';
import styled from 'styled-components';
import Category from '../../components/common/category/Category';
import AddCategoryButton from '../../components/common/add-category-button/AddCategoryButton';
import useStore from '../../hook/use-store/useStore';
import { observer } from 'mobx-react';

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

const SettingsCategoryView: React.FC<Props> = ({ accountbookId }: Props) => {
  const { rootStore } = useStore();
  const { categoryStore } = rootStore;

  useEffect(() => {
    categoryStore.updateIncomeCategories(accountbookId);
    categoryStore.updateExpenditureCategories(accountbookId);
  }, []);

  const ExpenditureCategoryItems = categoryStore.expenditureCategories.map((item) => (
    <CategoryItemWrapper key={item.id}>
      <Category key={item.id} text={item.name} bgColor={item.color} shadow={true} />
    </CategoryItemWrapper>
  ));

  const IncomeCategoryItems = categoryStore.incomeCategories.map((item) => (
    <CategoryItemWrapper key={item.id}>
      <Category key={item.id} text={item.name} bgColor={item.color} shadow={true} />
    </CategoryItemWrapper>
  ));

  return (
    <SettingsCategoryViewWrapper>
      <SettingsItemWrapper>
        <Label>지출</Label>
        <CategoryWrapper>
          {ExpenditureCategoryItems}
          <CategoryItemWrapper>
            <AddCategoryButton />
          </CategoryItemWrapper>
        </CategoryWrapper>
      </SettingsItemWrapper>
      <SettingsItemWrapper>
        <Label>수입</Label>
        <CategoryWrapper>
          {IncomeCategoryItems}
          <CategoryItemWrapper>
            <AddCategoryButton />
          </CategoryItemWrapper>
        </CategoryWrapper>
      </SettingsItemWrapper>
    </SettingsCategoryViewWrapper>
  );
};

export default observer(SettingsCategoryView);
