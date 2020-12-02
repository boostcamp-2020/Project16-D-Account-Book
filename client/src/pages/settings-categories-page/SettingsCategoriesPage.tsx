import React, { useState } from 'react';
import styled from 'styled-components';
import SettingsSidebar from '../../components/common/settings-sidebar/SettingsSidebar';
import Category from '../../components/common/category/Category';
import AddCategoryButton from '../../components/common/add-category-button/AddCategoryButton';
import {
  expenditureCategoriesDummy,
  incomeCategoriesDummy,
} from '../../__dummy-data__/components/settings/categoryData';

const SettingsCategoriesPageWrapper = styled.div`
  display: flex;
`;

const SettingsBody = styled.div`
  position: fixed;
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

const SettingsCategoriesPage = (): JSX.Element => {
  // TODO: setter의 경우 카테고리 생성, 변경 모달창 구현 시 작업 예정
  const [expenditureCategories, setExpenditureCategories] = useState(expenditureCategoriesDummy);
  const [incomeCategories, setIncomeCategories] = useState(incomeCategoriesDummy);

  const ExpenditureCategoryItems = expenditureCategories.map((item) => (
    <CategoryItemWrapper key={item.id}>
      <Category key={item.id} text={item.name} bgColor={item.color} />
    </CategoryItemWrapper>
  ));

  const IncomeCategoryItems = incomeCategories.map((item) => (
    <CategoryItemWrapper key={item.id}>
      <Category key={item.id} text={item.name} bgColor={item.color} />
    </CategoryItemWrapper>
  ));

  return (
    <SettingsCategoriesPageWrapper>
      <SettingsSidebar currentPage={'categories'} />
      <SettingsBody>
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
      </SettingsBody>
    </SettingsCategoriesPageWrapper>
  );
};

export default SettingsCategoriesPage;
