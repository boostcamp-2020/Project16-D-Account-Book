import React, { useState } from 'react';
import useStore from '../../../../hook/use-store/useStore';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalItem from '../form-modal-template/FormModalItemWrapper';
import FormModalLabel from '../form-modal-template/FormModalLabel';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { observer } from 'mobx-react';
import CategoryPreview from '../../category-preview/CategoryPreview';
import InputText from '../../inputs/input-text/InputText';
import formModal from '../../../../constants/formModal';
import { Category } from '../../../../types/category';
import { convertToCategory } from '../formUtils';
import useGetParam from '../../../../hook/use-get-param/useGetParam';

const FormModalUpdateCategory: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const updateCategoryFormStore = rootStore.modalStore.updateCategoryFormStore;
  const { show } = updateCategoryFormStore;

  const [name, setName] = useState<string>(
    updateCategoryFormStore.incomeFlag
      ? (updateCategoryFormStore.incomeCategory as Category).name
      : (updateCategoryFormStore.expenditureCategory as Category).name,
  );
  const [inputColor, setInputColor] = useState<string>(
    updateCategoryFormStore.incomeFlag
      ? (updateCategoryFormStore.incomeCategory as Category).color
      : (updateCategoryFormStore.expenditureCategory as Category).color,
  );

  const incomeCategoryId = updateCategoryFormStore.incomeCategory?.id;
  const expenditureCategoryId = updateCategoryFormStore.expenditureCategory?.id;

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const modalToggle = (): void => {
    updateCategoryFormStore.toggleShow();
  };

  const deleteIncomeCategory = (): void => {
    try {
      if (incomeCategoryId !== undefined) {
        rootStore.categoryStore.deleteIncomeCategory(incomeCategoryId);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  const deleteExpenditureCategory = (): void => {
    try {
      if (expenditureCategoryId !== undefined) {
        rootStore.categoryStore.deleteExpenditureCategory(expenditureCategoryId);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  const updateIncomeCategory = (): void => {
    if (incomeCategoryId && name && inputColor) {
      const incomeCategory = convertToCategory(id, name, inputColor);
      rootStore.categoryStore.updateIncomeCategory(incomeCategory, incomeCategoryId);
      modalToggle();
    }
  };

  const updateExpenditureCategory = (): void => {
    if (expenditureCategoryId && name && inputColor) {
      const expenditureCategory = convertToCategory(id, name, inputColor);
      rootStore.categoryStore.updateExpenditureCategory(expenditureCategory, expenditureCategoryId);
      modalToggle();
    }
  };

  return (
    <ModalBackground show={show} closeModal={modalToggle}>
      <FormModalWrapper>
        <FormModalHeader
          modalName={
            updateCategoryFormStore.incomeFlag
              ? formModal.UPDATE_INCOME_CATEGORY_MODAL_NAME
              : formModal.UPDATE_EXPENDITURE_CATEGORY_MODAL_NAME
          }
          blueName={'완료'}
          redName={'삭제'}
          closeModal={modalToggle}
          clickBlue={updateCategoryFormStore.incomeFlag ? updateIncomeCategory : updateExpenditureCategory}
          clickRed={updateCategoryFormStore.incomeFlag ? deleteIncomeCategory : deleteExpenditureCategory}
        />
        <FormModalItem>
          <CategoryPreview name={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.CATEGORY_LABEL_NAME}</FormModalLabel>
          <InputText maxLength={8} placeholder={formModal.CATEGORY_PLACEHOLDER} value={name} onChange={onChangeName} />
        </FormModalItem>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalUpdateCategory);
