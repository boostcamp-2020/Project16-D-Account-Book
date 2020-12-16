import React, { useState, useEffect } from 'react';
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
import { Account } from '../../../../types/account';
import CheckSuccess from '../../check/check-success/CheckSuccess';
import CheckFail from '../../check/check-fail/CheckFail';
import CheckSuccessText from '../../check/check-text/CheckSuccessText';
import CheckFailText from '../../check/check-text/CheckFailText';
import CheckNoActionText from '../../check/check-text/CheckNoActionText';
import CheckNoAction from '../../check/check-no-action/CheckNoAction';
import { LIGHT_GREEN, FAIL_RED } from '../../../../constants/color';
import { nameCheckValidationHeader, nameCheckValidationMessage } from '../../../../utils/form/validation';

const FormModalUpdateAccount: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const updateAccountFormStore = rootStore.modalStore.updateAccountFormStore;
  const { show } = updateAccountFormStore;
  const [colorCheck, setColorCheck] = useState(false);
  const [name, setName] = useState<string>((updateAccountFormStore.account as Account).name);
  const [inputColor, setInputColor] = useState<string>((updateAccountFormStore.account as Account).color);
  const { check, noChange } = rootStore.modalStore.updateAccountFormStore;

  const accountId = updateAccountFormStore.account?.id;

  useEffect(() => {
    updateAccountFormStore.loadOriginalAccount((updateAccountFormStore.account as Account).name);
  }, []);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (rootStore.accountStore.accountNames.includes(e.target.value)) {
      updateAccountFormStore.setCheckFalse();
    } else {
      updateAccountFormStore.setCheckTrue();
    }
    if (updateAccountFormStore.orginalAccountName === e.target.value) {
      updateAccountFormStore.setNoChangeTrue();
    } else {
      updateAccountFormStore.setNoChangeFalse();
    }
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
    if (inputColor.toLowerCase() === (updateAccountFormStore.account as Account).color.toLowerCase()) {
      setColorCheck(false);
    } else {
      setColorCheck(true);
    }
  };

  const modalToggle = (): void => {
    updateAccountFormStore.toggleShow();
    updateAccountFormStore.setNoChangeTrue();
  };

  const deleteAccount = (): void => {
    try {
      if (accountId !== undefined) {
        rootStore.accountStore.deleteAccount(accountId);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  const updateAccount = (): void => {
    if (accountId && name && inputColor) {
      const account = convertToAccount(id, name, inputColor);
      rootStore.accountStore.updateAccount(account, accountId);
      updateAccountFormStore.setNoChangeFalse();
      modalToggle();
    }
  };

  const nameCheckChangeValidation = nameCheckValidationHeader(check, noChange, name, colorCheck);
  const nameCheckMessage = nameCheckValidationMessage(check, name, noChange);
  if (
    updateAccountFormStore.convertAccount?.name !== undefined &&
    updateAccountFormStore.convertAccount?.color !== undefined
  ) {
    return (
      <ModalBackground show={show} closeModal={modalToggle}>
        <FormModalWrapper>
          {nameCheckChangeValidation(
            <FormModalHeader
              modalName={formModal.UPDATE_ACCOUNT_MODAL_NAME}
              blueName={'완료'}
              redName={'삭제'}
              closeModal={modalToggle}
              clickRed={deleteAccount}
              clickBlue={updateAccount}
            />,
            <FormModalHeader
              modalName={formModal.UPDATE_ACCOUNT_MODAL_NAME}
              closeModal={modalToggle}
              redName={'삭제'}
              clickRed={deleteAccount}
              disabledName={'완료'}
            />,
          )}

          <FormModalItem>
            <AccountPreview name={name} color={inputColor} onChange={onChange} />
          </FormModalItem>
          <FormModalItem>
            <FormModalLabel>{formModal.ACCOUNT_LABEL_NAME}</FormModalLabel>
            {nameCheckMessage(
              <InputText
                maxLength={8}
                placeholder={formModal.ACCOUNT_PLACEHOLDER}
                value={name}
                onChange={onChangeName}
                focusColor={LIGHT_GREEN}
              />,
              <InputText
                maxLength={8}
                placeholder={formModal.ACCOUNT_PLACEHOLDER}
                value={name}
                onChange={onChangeName}
                focusColor={FAIL_RED}
              />,
              <InputText
                maxLength={8}
                placeholder={formModal.ACCOUNT_PLACEHOLDER}
                value={name}
                onChange={onChangeName}
              />,
              <InputText
                maxLength={8}
                placeholder={formModal.ACCOUNT_PLACEHOLDER}
                value={name}
                onChange={onChangeName}
              />,
            )}
            {nameCheckMessage(<CheckSuccess />, <CheckFail />, <CheckNoAction />, <CheckNoAction />)}
          </FormModalItem>
          {nameCheckMessage(<CheckSuccessText />, <CheckFailText />, <CheckNoActionText />, <CheckNoActionText />)}
        </FormModalWrapper>
      </ModalBackground>
    );
  } else {
    return null;
  }
};

export default observer(FormModalUpdateAccount);
