import React, { useState, useEffect } from 'react';
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
import CheckSuccess from '../../check/check-success/CheckSuccess';
import CheckFail from '../../check/check-fail/CheckFail';
import CheckSuccessText from '../../check/check-text/CheckSuccessText';
import CheckFailText from '../../check/check-text/CheckFailText';
import CheckNoActionText from '../../check/check-text/CheckNoActionText';
import CheckNoAction from '../../check/check-no-action/CheckNoAction';

const FormModalUpdateCategory: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const updateCategoryFormStore = rootStore.modalStore.updateCategoryFormStore;
  const { show } = updateCategoryFormStore;
  const { check, noChange } = rootStore.modalStore.updateCategoryFormStore;

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

  useEffect(() => {
    updateCategoryFormStore.incomeFlag
      ? updateCategoryFormStore.loadOriginalIncomeCategory((updateCategoryFormStore.incomeCategory as Category).name)
      : updateCategoryFormStore.loadOriginalExpenditureCategory(
          (updateCategoryFormStore.expenditureCategory as Category).name,
        );
  }, []);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (updateCategoryFormStore.incomeFlag) {
      if (rootStore.categoryStore.incomeCategoryNames.includes(e.target.value)) {
        rootStore.modalStore.updateCategoryFormStore.setCheckFalse();
      } else {
        rootStore.modalStore.updateCategoryFormStore.setCheckTrue();
      }
      if (updateCategoryFormStore.originalIncomeCategoryName === e.target.value) {
        rootStore.modalStore.updateCategoryFormStore.setNoChangeTrue();
      } else {
        rootStore.modalStore.updateCategoryFormStore.setNoChangeFalse();
      }
    } else {
      if (rootStore.categoryStore.expenditureCategoryNames.includes(e.target.value)) {
        rootStore.modalStore.updateCategoryFormStore.setCheckFalse();
      } else {
        rootStore.modalStore.updateCategoryFormStore.setCheckTrue();
      }
      if (updateCategoryFormStore.originalExpenditureCategoryName === e.target.value) {
        rootStore.modalStore.updateCategoryFormStore.setNoChangeTrue();
      } else {
        rootStore.modalStore.updateCategoryFormStore.setNoChangeFalse();
      }
    }
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const modalToggle = (): void => {
    updateCategoryFormStore.toggleShow();
    updateCategoryFormStore.setNoChangeTrue();
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
        {check ? (
          name && !noChange ? (
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
          ) : (
            <FormModalHeader
              modalName={
                updateCategoryFormStore.incomeFlag
                  ? formModal.UPDATE_INCOME_CATEGORY_MODAL_NAME
                  : formModal.UPDATE_EXPENDITURE_CATEGORY_MODAL_NAME
              }
              redName={'삭제'}
              closeModal={modalToggle}
              clickRed={updateCategoryFormStore.incomeFlag ? deleteIncomeCategory : deleteExpenditureCategory}
              disabledName={'완료'}
            />
          )
        ) : (
          <FormModalHeader
            modalName={
              updateCategoryFormStore.incomeFlag
                ? formModal.UPDATE_INCOME_CATEGORY_MODAL_NAME
                : formModal.UPDATE_EXPENDITURE_CATEGORY_MODAL_NAME
            }
            redName={'삭제'}
            closeModal={modalToggle}
            clickRed={updateCategoryFormStore.incomeFlag ? deleteIncomeCategory : deleteExpenditureCategory}
            disabledName={'완료'}
          />
        )}
        <FormModalItem>
          <CategoryPreview name={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.CATEGORY_LABEL_NAME}</FormModalLabel>
          <InputText maxLength={8} placeholder={formModal.CATEGORY_PLACEHOLDER} value={name} onChange={onChangeName} />
          {check ? (
            name && !noChange ? (
              <CheckSuccess />
            ) : (
              <CheckNoAction />
            )
          ) : !noChange ? (
            <CheckFail />
          ) : (
            <CheckNoAction />
          )}
        </FormModalItem>
        {check ? (
          name && !noChange ? (
            <CheckSuccessText />
          ) : (
            <CheckNoActionText />
          )
        ) : !noChange ? (
          <CheckFailText />
        ) : (
          <CheckNoActionText />
        )}
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalUpdateCategory);
