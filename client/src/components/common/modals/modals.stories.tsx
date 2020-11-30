import React, { useState } from 'react';
import AcoountbookDeleteByAdminModal from './AccountbookDeleteByAdminModal';

export default {
  title: 'Modal Example',
};

export const AccountbookDeleteByAdminDefault: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  const closeModal = () => {
    console.log('outside click');
  };
  const cancelClick = () => {
    console.log('click cancel');
  };

  const deleteClick = () => {
    console.log('delete Click');
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
