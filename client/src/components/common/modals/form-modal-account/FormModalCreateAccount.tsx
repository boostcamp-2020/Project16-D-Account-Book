import React, { useState } from 'react';
import useStore from '../../../../hook/use-store/useStore';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import FormModalItem from '../form-modal-template/FormModalItemWrapper';
import FormModalLabel from '../form-modal-template/FormModalLabel';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import { observer } from 'mobx-react';
import AccountPreview from '../../account-preview/AccountPreview';
import InputText from '../../inputs/input-text/InputText';
import formModal from '../../../../constants/formModal';

const FormModalAccount: React.FC = () => {
  const { rootStore } = useStore();
  const toggle = rootStore.modalStore.createAccountFormStore;

  const [name, setName] = useState<string>('부스트카드');
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
        <FormModalHeader modalName={formModal.CreateAccountModalName} blueName={'생성'} closeModal={modalToggle} />
        <FormModalItem>
          <AccountPreview title={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.CreateAccountLabelName}</FormModalLabel>
          <InputText
            maxLength={8}
            placeholder={formModal.CreateAccountPlaceholder}
            value={name}
            onChange={onChangeName}
          />
        </FormModalItem>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalAccount);