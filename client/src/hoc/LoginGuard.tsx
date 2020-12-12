import { observer } from 'mobx-react';
import React from 'react';
import useStore from '../hook/use-store/useStore';

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
