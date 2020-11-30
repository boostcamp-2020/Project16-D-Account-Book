import React, { useState } from 'react';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import AcoountbookDeleteByAdminModal from './accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import FormModalHeader from './form-modal-header/FormModalHeader';
import TransactionInputList from './form-modal-transaction/TransactionInputList';
export default {
  title: 'Modal Example',
};

export const AccountbookDeleteByAdminDefault: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  const closeModal = () => {
    // 모달을 닫는 함수
  };
  const cancelClick = () => {
    // 선택 취소를 누르는 함수
  };

  const deleteClick = () => {
    // 삭제 버튼을 누르는 함수
  };
  return (
    <AcoountbookDeleteByAdminModal
      cancelClick={cancelClick}
      deleteClick={deleteClick}
      show={state}
      closeModal={closeModal}
    />
  );
};

export const FormModalHeaderDefault: React.FC = () => {
  return <FormModalHeader modalName={'내역 변경'} blueName={'완료'} redName={'삭제'} />;
};

const inputs = {
  price: 1000,
  classify: true,
  categories: {
    placeholder: '카테고리',
    items: dummyOptions,
  },
  accounts: {
    placeholder: '결제수단',
    items: dummyOptions,
  },
};

const changes = {
  price: (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  },
  classify: {
    income: () => {
      //
    },
    expenditure: () => {
      //
    },
  },
  categories: (change: string) => {
    console.log(change);
    //
  },
  accounts: (change: string) => {
    console.log(change);
  },
};

export const TransactionInputListDefault: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <TransactionInputList inputs={inputs} changes={changes} />
    </div>
  );
};
