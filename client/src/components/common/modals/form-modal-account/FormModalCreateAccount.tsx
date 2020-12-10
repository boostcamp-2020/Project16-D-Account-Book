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
import useGetParam from '../../../../hook/use-get-param/useGetParam';
import { convertToAccount } from '../formUtils';
import { BLACK } from '../../../../constants/color';
import CheckSuccess from '../../check/check-success/CheckSuccess';
import CheckFail from '../../check/check-fail/CheckFail';
import CheckSuccessText from '../../check/check-text/CheckSuccessText';
import CheckFailText from '../../check/check-text/CheckFailText';

const FormModalAccount: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const toggle = rootStore.modalStore.createAccountFormStore;
  const { check } = rootStore.modalStore.createAccountFormStore;

  const [name, setName] = useState<string>('');
  const [inputColor, setInputColor] = useState<string>(BLACK);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (rootStore.accountStore.accountNames.includes(e.target.value)) {
      rootStore.modalStore.createAccountFormStore.setCheckFalse();
    } else {
      rootStore.modalStore.createAccountFormStore.setCheckTrue();
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

  const onCreate = () => {
    try {
      const account = convertToAccount(id, name, inputColor);
      rootStore.accountStore.createAccount(account);
      setName('');
      setInputColor(BLACK);
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
              modalName={formModal.CREATE_ACCOUNT_MODAL_NAME}
              blueName={'생성'}
              closeModal={modalToggle}
              clickBlue={onCreate}
            />
          ) : (
            <FormModalHeader
              modalName={formModal.CREATE_ACCOUNT_MODAL_NAME}
              closeModal={modalToggle}
              disabledName={'생성'}
            />
          )
        ) : (
          <FormModalHeader
            modalName={formModal.CREATE_ACCOUNT_MODAL_NAME}
            closeModal={modalToggle}
            disabledName={'생성'}
          />
        )}
        <FormModalItem>
          <AccountPreview name={name} color={inputColor} onChange={onChange} />
        </FormModalItem>
        <FormModalItem>
          <FormModalLabel>{formModal.ACCOUNT_LABEL_NAME}</FormModalLabel>
          <InputText maxLength={8} placeholder={formModal.ACCOUNT_PLACEHOLDER} value={name} onChange={onChangeName} />
          {check ? name && <CheckSuccess /> : <CheckFail />}
        </FormModalItem>
        <FormModalItem>{check ? name && <CheckSuccessText /> : <CheckFailText />}</FormModalItem>
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalAccount);
