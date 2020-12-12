import React, { useState } from 'react';
import AcoountbookDeleteByAdminModal from './accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import FormModalHeader from './form-modal-header/FormModalHeader';
import TransactionInputList from './form-modal-transaction/TransactionInputList';
import FormFilter from './form-modal-filter/FormFilter';
import FormModalFilter from './form-modal-filter/FormModalFilter';
import { inputs, changes } from '../../../__dummy-data__/components/modal/modalTransactions';
import styled from 'styled-components';

export default {
  title: 'Modal Example',
};

export const AccountbookDeleteByAdminDefault: React.FC = () => {
  return <AcoountbookDeleteByAdminModal />;
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
      <FormFilter />
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
