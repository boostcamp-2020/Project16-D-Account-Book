import React from 'react';
import TransactionInputList from './TransactionInputList';
import UseTransactionForm from '../../../../hook/use-transaction-form/UseTransactionForm';
import FormModalWrapper from '../form-modal-template/FormModalWrapper';
import ModalBackground from '../modal-background/ModalBackground';

//임시용
import dummyOptions from '../../../../__dummy-data__/components/inputs/dummyOptions';

const FormModalTransaction: React.FC = () => {
  // 임시 카테고리
  const category = dummyOptions;
  // 임시 accounts
  const accounts = dummyOptions;

  //임시로 빈 객체를 넣음
  const [inputs, changes] = UseTransactionForm();

  const inputListInputs = {
    ...inputs,
    categories: {
      placeholder: '카테고리',
      items: category,
      selected: inputs.categories,
    },
    accounts: {
      placeholder: '계좌',
      items: category,
      selected: inputs.accounts,
    },
  };

  return (
    <ModalBackground show={true}>
      <FormModalWrapper>
        <TransactionInputList inputs={inputListInputs} changes={changes} />
      </FormModalWrapper>
    </ModalBackground>
  );
};

export default FormModalTransaction;
