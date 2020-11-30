import React, { useState } from 'react';
import AcoountbookDeleteByAdminModal from './accountbook-delete-by-admin/AccountbookDeleteByAdminModal';

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
