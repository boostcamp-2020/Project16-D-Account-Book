import React from 'react';
import TransactionInputList from './TransactionInputList';
import useGetParam from '../../../../hook/use-get-param/useGetParam';
import useStore from '../../../../hook/use-store/useStore';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import UseTransactionFrom from '../../../../hook/use-transaction-form/useTransactionForm';
import { observer } from 'mobx-react-lite';

const FormModalUpdateTransaction: React.FC = () => {
  const { rootStore } = useStore();
  const accountBookId = useGetParam();
  const incomeCategory = rootStore.categoryStore.incomeOptions;
  const expenditureCategory = rootStore.categoryStore.expenditureOptions;
  const accounts = rootStore.accountStore.accountOptions;
  const updateModalStore = rootStore.modalStore.updateTransactionFormStore;

  const show = updateModalStore.show;

  const [inputs, changes] = UseTransactionFrom();

  const inputListInputs = {
    ...inputs,
    categories: {
      placeholder: '카테고리',
      items: inputs.classify ? incomeCategory : expenditureCategory,
      selected: inputs.categories,
    },
    accounts: {
      placeholder: '계좌',
      items: accounts,
      selected: inputs.accounts,
    },
  };

  const closeModal = (): void => {
    updateModalStore.setShowFalse();
  };

  if (!show) {
    return null;
  }

  return (
    <ModalBackground show={show} closeModal={closeModal}>
      <FormModalWrapper>
        <FormModalHeader modalName={'내역수정'} blueName={'수정'} redName={'삭제'}></FormModalHeader>
        <TransactionInputList inputs={inputListInputs} changes={changes} />
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalUpdateTransaction);
