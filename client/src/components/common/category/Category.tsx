import React, { memo } from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import useStore from '../../../hook/use-store/useStore';
import { SingleCategory } from '../../../types/category';
import { convertToCategoryObj } from '../modals/formUtils';

export const CategoryWrapper = styled.div<{
  bgColor: string;
  textColor: string;
  shadow?: boolean;
  minWidth?: string;
  preview?: string;
}>`
  width: 100%;
  max-width: 115px;
  min-width: ${({ minWidth }) => minWidth};
  height: 100%;
  max-height: 50px;
  min-height: 43px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  text-align: center;
  padding: 12px 10px 12px 10px;
  border-radius: 360px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: ${({ preview }) => preview};

  &:hover {
    box-shadow: ${({ shadow }) => (shadow === true ? '2px 3px 7px gray' : 0)};
  }
`;

const Category = (singleCategory: SingleCategory): JSX.Element => {
  const { rootStore } = useStore();
  const updateCategoryForm = rootStore.modalStore.updateCategoryFormStore;

  const openUpdateCategoryForm = (): void => {
    updateCategoryForm.toggleShow();
    if (singleCategory.onClick !== undefined) {
      singleCategory.onClick();
    }
    const category = convertToCategoryObj(singleCategory.id, singleCategory.name, singleCategory.color);
    if (updateCategoryForm.incomeFlag) {
      updateCategoryForm.loadIncomeCategory(category);
    } else {
      updateCategoryForm.loadExpenditureCategory(category);
    }
  };

  const textColor = getTextColor(singleCategory.color);
  return (
    <CategoryWrapper
      bgColor={singleCategory.color}
      textColor={textColor}
      shadow={singleCategory.shadow}
      minWidth={singleCategory.minWidth}
      preview={singleCategory.preview}
      onClick={openUpdateCategoryForm}
    >
      {singleCategory.name}
    </CategoryWrapper>
  );
};

export default memo(Category);
