import { observer } from 'mobx-react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import useGetParam from '../hook/use-get-param/useGetParam';
import useSocket from '../hook/use-socket/useSocket';
import useStore from '../hook/use-store/useStore';

const UserAuthorityGuardHOC = (HOC: React.ComponentType<any>): React.FC => {
  const UserAuthorityGuard = (props: any) => {
    const { userStore } = useStore().rootStore;
    const accountbookId = useGetParam();

    useSocket();
    const flag = userStore.isUserAdmin(accountbookId);

    if (userStore.accountAuthorList === null) {
      return <></>;
    }

    if (flag) {
      return <HOC {...props} />;
    }

    return <Redirect to="/" />;
  };
  return observer(UserAuthorityGuard);
};

export default UserAuthorityGuardHOC;
