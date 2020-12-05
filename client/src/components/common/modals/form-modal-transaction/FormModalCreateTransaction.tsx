import React from 'react';
import TransactionInputList from './TransactionInputList';
import UseTransactionForm from '../../../../hook/use-transaction-form/useTransactionForm';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import useStore from '../../../../hook/use-store/useStore';

import { observer } from 'mobx-react';
import { Options } from '../../../../types/options';
import RootStore from '../../../../store/RootStore';

const FormModalTransaction: React.FC = () => {
  const { rootStore } = useStore();
  const toggle = rootStore.modalStore.createTransactionFormStore;

  // 임시 카테고리
  const incomeCategory = rootStore.categoryStore.incomeOptions;
  const expenditureCategory = rootStore.categoryStore.expenditureOptions;
  // 임시 accounts
  const accounts = rootStore.accountStore.accountOptions;

  //임시로 빈 객체를 넣음
  const [inputs, changes] = UseTransactionForm();

  const { show } = toggle;
  const modalToggle = (): void => {
    toggle.toggleShow();
  };

  const inputListInputs = {
    ...inputs,
    categories: {
      placeholder: '카테고리',
      items: incomeCategory,
      selected: inputs.categories,
    },
    accounts: {
      placeholder: '계좌',
      items: accounts,
      selected: inputs.accounts,
    },
  };

  if (!show) {
    return null;
  }

  return (
    <ModalBackground show={show} closeModal={modalToggle}>
      <FormModalWrapper>
        <FormModalHeader modalName={'내역작성'} blueName={'완료'} closeModal={modalToggle} />
        <TransactionInputList inputs={inputListInputs} changes={changes} />
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalTransaction);
