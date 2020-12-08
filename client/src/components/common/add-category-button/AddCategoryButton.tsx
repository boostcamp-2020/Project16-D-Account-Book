import React from 'react';
import useStore from '../../../hook/use-store/useStore';
import styled from 'styled-components';
import PlusInCircle from '../plus-in-circle/PlusInCircle';
import { GRAY } from '../../../constants/color';

const CategoryWrapper = styled.div`
  width: 100%;
  max-width: 115px;
  height: 100%;
  max-height: 50px;
  background-color: ${GRAY};
  box-sizing: border-box;
  border-radius: 360px;
  padding: 9.5px 7.5px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 2px 3px 7px gray;
  }
`;

const PlusInCircleWrapper = styled.div`
  margin: auto 0;
`;

const AddCategoryButton: React.FC = () => {
  const { rootStore } = useStore();
  const createCategoryForm = rootStore.modalStore.createCategoryFormStore;

  const openCreateCategoryForm = (): void => {
    createCategoryForm.toggleShow();
  };

  return (
    <CategoryWrapper onClick={openCreateCategoryForm}>
      <PlusInCircleWrapper>
        <PlusInCircle sideLength={'1.5rem'} />
      </PlusInCircleWrapper>
    </CategoryWrapper>
  );
};

export default AddCategoryButton;
