import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import useStore from '../../../hook/use-store/useStore';

const CategoryWrapper = styled.div<{
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

interface CategoryProps {
  text: string | undefined;
  bgColor: string;
  shadow?: boolean;
  minWidth?: string;
  preview?: string;
  onClick?: () => void;
}

const Category = ({ text, bgColor, shadow, minWidth, preview, onClick }: CategoryProps): JSX.Element => {
  const { rootStore } = useStore();
  const updateCategoryForm = rootStore.modalStore.updateCategoryFormStore;

  const openUpdateCategoryForm = (): void => {
    updateCategoryForm.toggleShow();
  };

  const textColor = getTextColor(bgColor);
  return (
    <CategoryWrapper
      bgColor={bgColor}
      textColor={textColor}
      shadow={shadow}
      minWidth={minWidth}
      preview={preview}
      onClick={openUpdateCategoryForm}
    >
      {text}
    </CategoryWrapper>
  );
};

export default Category;
