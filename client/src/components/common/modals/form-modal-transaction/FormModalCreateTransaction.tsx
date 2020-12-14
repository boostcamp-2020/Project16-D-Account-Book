import React, { useState } from 'react';
import TransactionInputList from './TransactionInputList';
import UseTransactionForm from '../../../../hook/use-transaction-form/useTransactionForm';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import ModalBackground from '../modal-background/ModalBackground';
import FormModalHeader from '../form-modal-header/FormModalHeader';
import useStore from '../../../../hook/use-store/useStore';
import { convertToIncome, convertToExpenditure } from '../formUtils';
import { observer } from 'mobx-react';
import useGetParam from '../../../../hook/use-get-param/useGetParam';
import MMSInput from './MMSInput';

const FormModalTransaction: React.FC = () => {
  const { rootStore } = useStore();
  const [mmsMode, setMMSMode] = useState(false);
  const id = useGetParam();
  const toggle = rootStore.modalStore.createTransactionFormStore;

  const incomeCategory = rootStore.categoryStore.incomeOptions;
  const expenditureCategory = rootStore.categoryStore.expenditureOptions;
  const accounts = rootStore.accountStore.accountOptions;

  const [inputs, changes] = UseTransactionForm();

  const { show } = toggle;
  const modalToggle = (): void => {
    toggle.toggleShow();
  };

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

  if (!show) {
    return null;
  }

  const expenditureClick = () => {
    try {
      const expenditure = convertToExpenditure(inputs, id);
      rootStore.transactionStore.createExpenditure(expenditure);
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };
  const incomeClick = () => {
    try {
      const income = convertToIncome(inputs, id);
      rootStore.transactionStore.createIncome(income);
    } catch (e) {
      alert(e.message);
    } finally {
      modalToggle();
    }
  };

  return (
    <ModalBackground show={show} closeModal={modalToggle}>
      <FormModalWrapper>
        <FormModalHeader
          modalName={'내역작성'}
          blueName={'완료'}
          closeModal={modalToggle}
          clickBlue={inputs.classify ? incomeClick : expenditureClick}
          clickSMS={() => {
            setMMSMode(!mmsMode);
          }}
          sms={true}
        />
        {!mmsMode ? <TransactionInputList inputs={inputListInputs} changes={changes} /> : <MMSInput />}
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default observer(FormModalTransaction);
