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

const FormModalUpdateCategory: React.FC = () => {
  const { rootStore } = useStore();
  const toggle = rootStore.modalStore.updateCategoryFormStore;

  const [name, setName] = useState<string>('카테고리 1');
  const [inputColor, setInputColor] = useState<string>('#000000');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const { show } = toggle;
  const modalToggle = (): void => {
    toggle.toggleShow();
  };

  return (
    <ModalBackground show={show} closeModal={modalToggle}>
      <FormModalWrapper>
        <FormModalHeader
          modalName={formModal.UpdateCategorytModalName}
          blueName={'완료'}
          redName={'삭제'}
          closeModal={modalToggle}
          // TODO: 카테고리 변경 로직 구현 필요
          // clickBlue={toggle.incomeFlag ? onCreateIncomeCategory : onCreateExpenditureCategory}
        />
        <FormModalItem>
          <CategoryPreview title={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.CategoryLabelName}</FormModalLabel>
          <InputText maxLength={8} placeholder={formModal.CategoryPlaceholder} value={name} onChange={onChangeName} />
        </FormModalItem>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalUpdateCategory);
