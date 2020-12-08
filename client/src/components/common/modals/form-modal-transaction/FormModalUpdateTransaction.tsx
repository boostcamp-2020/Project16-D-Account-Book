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
  const transactionStore = rootStore.transactionStore;
  const updateModalStore = rootStore.modalStore.updateTransactionFormStore;

  const show = updateModalStore.show;

  const startInputData = updateModalStore.converIncomeExpenditureToTransactionForm;

  const transactionId = updateModalStore.incomeExpenditure?.id;

  const [inputs, changes] = UseTransactionFrom(startInputData);
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
    date: inputs.date.replace(/Z/g, ''),
  };
  changes.classify = undefined;

  const closeModal = (): void => {
    updateModalStore.setShowFalse();
  };

  const incomeDelete = (): void => {
    if (transactionId) {
      transactionStore.deleteIncome(transactionId);
      closeModal();
    }
  };

  const expenditureDelete = (): void => {
    if (transactionId) {
      transactionStore.deleteExpenditure(transactionId);
      closeModal();
    }
  };

  const incomeUpdate = (): void => {
    //pass
    if (transactionId) {
    }
  };

  const expenditureUpdate = (): void => {
    //pass
    if (transactionId) {
    }
  };

  if (!show) {
    return null;
  }

  return (
    <ModalBackground show={show} closeModal={closeModal}>
      <FormModalWrapper>
        <FormModalHeader
          closeModal={closeModal}
          modalName={'내역수정'}
          blueName={'수정'}
          redName={'삭제'}
          clickRed={inputs.classify ? incomeDelete : expenditureDelete}
        ></FormModalHeader>
        <TransactionInputList inputs={inputListInputs} changes={changes} />
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalUpdateTransaction);
