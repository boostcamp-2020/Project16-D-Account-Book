import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useGetParam from '../hook/use-get-param/useGetParam';
import useStore from '../hook/use-store/useStore';
import socket, { event } from '../socket';
import React from 'react';
import { Redirect } from 'react-router-dom';
import useGetParam from '../hook/use-get-param/useGetParam';
import useStore from '../hook/use-store/useStore';

const LoginGuard = (HOC: React.ComponentType<any>): React.FC => {
  const LoginGuardChecker = (props: any) => {
    const { userStore } = useStore().rootStore;
    const accountbookId = useGetParam();

    useEffect(() => {
      socket.emit(event.JOIN, accountbookId);
      return () => {
        socket.emit(event.LEAVE, accountbookId);
      };
    }, [accountbookId]);


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
