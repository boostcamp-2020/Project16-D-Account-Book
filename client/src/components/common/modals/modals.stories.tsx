import React, { useState } from 'react';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import AcoountbookDeleteByAdminModal from './accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import FormModalHeader from './form-modal-header/FormModalHeader';
import TransactionInputList from './form-modal-transaction/TransactionInputList';
import FormFilter from './form-modal-filter/FormFilter';
import FormModalFilter from './form-modal-filter/FormModalFilter';
import { inputs, changes } from '../../../__dummy-data__/components/modal/modalTransactions';
import { inputs as filterInputs, changes as filterChanges } from '../../../__dummy-data__/components/modal/modalFilter';
import FormModalTransaction from './form-modal-transaction/FormModalCreateTransaction';
import FormModalAccount from './form-modal-account/FormModalCreateAccount';
import FormModalCategory from './form-modal-category/FormModalCreateCategory';
import FormModalUpdateAccount from './form-modal-account/FormModalUpdateAccount';
import styled from 'styled-components';

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

export const TransactionInputListDefault: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <TransactionInputList inputs={inputs} changes={changes} />
    </div>
  );
};

export const FormFilterDefault: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#ECECEC' }}>
      <FormFilter inputs={filterInputs} changes={filterChanges} />
    </div>
  );
};

const Div = styled.div`
  height: 1000px;
`;
export const FormModalFilterDefault: React.FC = () => {
  return (
    <>
      <FormModalFilter accountbookId={1} />
    </>
  );
};

export const FormModalTransactionDefault: React.FC = () => {
  return <FormModalTransaction />;
};

export const FormModalAccountDefault: React.FC = () => {
  return <FormModalAccount />;
};

export const FormModalCategoryDefault: React.FC = () => {
  return <FormModalCategory />;
};

export const FormModalUpdateAccountDefault: React.FC = () => {
  return <FormModalUpdateAccount />;
};
