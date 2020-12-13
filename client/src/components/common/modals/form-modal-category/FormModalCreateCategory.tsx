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
import useGetParam from '../../../../hook/use-get-param/useGetParam';
import { convertToCategory } from '../formUtils';
import { BLACK } from '../../../../constants/color';
import CheckSuccess from '../../check/check-success/CheckSuccess';
import CheckFail from '../../check/check-fail/CheckFail';
import CheckSuccessText from '../../check/check-text/CheckSuccessText';
import CheckFailText from '../../check/check-text/CheckFailText';
import CheckNoAction from '../../check/check-no-action/CheckNoAction';
import CheckNoActionText from '../../check/check-text/CheckNoActionText';

const FormModalCategory: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const toggle = rootStore.modalStore.createCategoryFormStore;
  const { check, incomeFlag } = rootStore.modalStore.createCategoryFormStore;

  const [name, setName] = useState<string>('');
  const [inputColor, setInputColor] = useState<string>(BLACK);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (incomeFlag) {
      if (rootStore.categoryStore.incomeCategoryNames.includes(e.target.value)) {
        rootStore.modalStore.createCategoryFormStore.setCheckFalse();
      } else if (!rootStore.categoryStore.incomeCategoryNames.includes(e.target.value)) {
        rootStore.modalStore.createCategoryFormStore.setCheckTrue();
      }
    }
    if (!incomeFlag) {
      if (rootStore.categoryStore.expenditureCategoryNames.includes(e.target.value)) {
        rootStore.modalStore.createCategoryFormStore.setCheckFalse();
      } else if (!rootStore.categoryStore.expenditureCategoryNames.includes(e.target.value)) {
        rootStore.modalStore.createCategoryFormStore.setCheckTrue();
      }
    }
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const { show } = toggle;
  const modalToggle = (): void => {
    toggle.toggleShow();
    setName('');
    setInputColor(BLACK);
  };

  const onCreateIncomeCategory = () => {
    try {
      const incomeCategory = convertToCategory(id, name, inputColor);
      rootStore.categoryStore.createIncomeCategory(incomeCategory);
      setName('');
      setInputColor(BLACK);
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  const onCreateExpenditureCategory = () => {
    try {
      const expenditureCategory = convertToCategory(id, name, inputColor);
      rootStore.categoryStore.createExpenditureCategory(expenditureCategory);
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  return (
    <ModalBackground show={show} closeModal={modalToggle}>
      <FormModalWrapper>
        {check ? (
          name ? (
            <FormModalHeader
              modalName={
                incomeFlag
                  ? formModal.CREATE_INCOME_CATEGORY_MODAL_NAME
                  : formModal.CREATE_EXPENDITURE_CATEGORY_MODAL_NAME
              }
              blueName={'생성'}
              closeModal={modalToggle}
              clickBlue={incomeFlag ? onCreateIncomeCategory : onCreateExpenditureCategory}
            />
          ) : (
            <FormModalHeader
              modalName={
                incomeFlag
                  ? formModal.CREATE_INCOME_CATEGORY_MODAL_NAME
                  : formModal.CREATE_EXPENDITURE_CATEGORY_MODAL_NAME
              }
              closeModal={modalToggle}
              disabledName={'생성'}
            />
          )
        ) : (
          <FormModalHeader
            modalName={
              incomeFlag
                ? formModal.CREATE_INCOME_CATEGORY_MODAL_NAME
                : formModal.CREATE_EXPENDITURE_CATEGORY_MODAL_NAME
            }
            closeModal={modalToggle}
            disabledName={'생성'}
          />
        )}
        <FormModalItem>
          <CategoryPreview name={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.CATEGORY_LABEL_NAME}</FormModalLabel>
          <InputText maxLength={8} placeholder={formModal.CATEGORY_PLACEHOLDER} value={name} onChange={onChangeName} />
          {check ? name ? <CheckSuccess /> : <CheckNoAction /> : <CheckFail />}
        </FormModalItem>
        {check ? name ? <CheckSuccessText /> : <CheckNoActionText /> : <CheckFailText />}
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalCategory);
