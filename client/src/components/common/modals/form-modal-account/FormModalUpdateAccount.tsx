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

const FormModalUpdateAccount: React.FC = () => {
  const { rootStore } = useStore();
  const id = useGetParam();
  const updateAccountFormStore = rootStore.modalStore.updateAccountFormStore;
  const { show } = updateAccountFormStore;
  const [name, setName] = useState<string | undefined>(updateAccountFormStore.account?.name);
  const [inputColor, setInputColor] = useState<string | undefined>(updateAccountFormStore.account?.color);

  const accountId = updateAccountFormStore.account?.id;

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChange = (color: { hex: string }): void => {
    setInputColor(color.hex);
  };

  const modalToggle = (): void => {
    updateAccountFormStore.toggleShow();
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
      modalToggle();
    }
  };

  if (
    updateAccountFormStore.convertAccount?.name !== undefined &&
    updateAccountFormStore.convertAccount?.color !== undefined
  ) {
    return (
      <ModalBackground show={show} closeModal={modalToggle}>
        <FormModalWrapper>
          <FormModalHeader
            modalName={formModal.UpdateAccountModalName}
            blueName={'완료'}
            redName={'삭제'}
            closeModal={modalToggle}
            clickRed={deleteAccount}
            clickBlue={updateAccount}
          />
          <FormModalItem>
            <AccountPreview
              name={updateAccountFormStore.convertAccount?.name}
              color={updateAccountFormStore.convertAccount?.color}
              onChange={onChange}
            />
          </FormModalItem>
          <FormModalItem>
            <FormModalLabel>{formModal.AccountLabelName}</FormModalLabel>
            <InputText
              maxLength={8}
              placeholder={formModal.AccountPlaceholder}
              value={updateAccountFormStore.convertAccount?.name}
              onChange={onChangeName}
            />
          </FormModalItem>
        </FormModalWrapper>
      </ModalBackground>
    );
  } else {
    return null;
  }
};

export default observer(FormModalUpdateAccount);
