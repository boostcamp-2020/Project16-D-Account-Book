import React from 'react';
import AccountbookCard from '../components/accountbook-selection-page/accountbook-card/AccountbookCard';
import AccountbookDeleteByAdminModal from '../components/common/modals/accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import useStore from '../hook/use-store/useStore';
import { observer } from 'mobx-react';
import AccountbookDeleteByUserModal from '../components/common/modals/accountbook-delete-by-user/AccountbookDeleteByUserModal';
import GiveAdminModal from '../components/common/modals/give-admin-modal/GiveAdminModal';

const AccountbookDeleteTestPage = (): JSX.Element => {
  const { userStore } = useStore().rootStore;
  //console.log(userStore.accountAuthorList);
  const {
    deleteAccountbookByAdminStore,
    deleteAccountbookByUserStore,
    giveAdminStore,
  } = useStore().rootStore.modalStore;

  return (
    <>
      {giveAdminStore.show && <GiveAdminModal />}
      {deleteAccountbookByUserStore.show && <AccountbookDeleteByUserModal />}
      {deleteAccountbookByAdminStore.show && <AccountbookDeleteByAdminModal />}
      <AccountbookCard id={4} title="어드민" color="#000000" description="삭제테스트" accountbookId={1} />
      <AccountbookCard id={8} title="일반유저" color="#ffff00" description="삭제테스트" accountbookId={2} />
    </>
  );
};

export default observer(AccountbookDeleteTestPage);
