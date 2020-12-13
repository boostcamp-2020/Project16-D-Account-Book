import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import useGetParam from '../hook/use-get-param/useGetParam';
import useStore from '../hook/use-store/useStore';
import useSocket from '../hook/use-socket/useSocket';

const LoginGuardHOC = (HOC: React.ComponentType<any>): React.FC => {
  const LoginGuard = (props: any) => {
    const { userStore } = useStore().rootStore;

    if (userStore.accountAuthorList === null) {
      return <></>;
    }

    return <HOC {...props} />;
  };

  return observer(LoginGuard);
};

export default LoginGuardHOC;
