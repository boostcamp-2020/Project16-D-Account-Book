import React from 'react';
import AccountbookCard from '../components/accountbook-selection-page/accountbook-card/AccountbookCard';
import AccountbookDeleteByAdminModal from '../components/common/modals/accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import useStore from '../hook/use-store/useStore';
import { observer } from 'mobx-react';
import AccountbookDeleteByUserModal from '../components/common/modals/accountbook-delete-by-user/AccountbookDeleteByUserModal';

const AccountbookDeleteTestPage = (): JSX.Element => {
  const { userStore } = useStore().rootStore;
  const { deleteAccountbookByAdminStore } = useStore().rootStore.modalStore;

  return (
    <>
      <AccountbookDeleteByUserModal />
      {deleteAccountbookByAdminStore.show && <AccountbookDeleteByAdminModal />}
      <AccountbookCard id={3} title="가계부" color="#000000" description="삭제테스트" accountbookId={1} />
    </>
  );
};

export default observer(AccountbookDeleteTestPage);
