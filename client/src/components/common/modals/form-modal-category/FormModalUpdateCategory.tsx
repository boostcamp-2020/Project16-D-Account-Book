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
import { BLACK } from '../../../../constants/color';

const FormModalUpdateCategory: React.FC = () => {
  const { rootStore } = useStore();
  const updateCategoryFormStore = rootStore.modalStore.updateCategoryFormStore;
  const { show } = updateCategoryFormStore;

  const [name, setName] = useState<string>('카테고리 1');
  const [inputColor, setInputColor] = useState<string>(BLACK);

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
