import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useGetParam from '../hook/use-get-param/useGetParam';
import useStore from '../hook/use-store/useStore';
import useSocket from '../hook/use-socket/useSocket';

const LoginGuard = (HOC: React.ComponentType<any>): React.FC => {
  const LoginGuardChecker = (props: any) => {
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
  return observer(LoginGuardChecker);
};

export default LoginGuard;
