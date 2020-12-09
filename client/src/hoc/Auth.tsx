import React, { useEffect } from 'react';
import useStore from '../hook/use-store/useStore';
import { observer } from 'mobx-react';

export default (SpecificComponent: any): any => {
  const AuthenticationCheck = (props: any) => {
    const { userStore } = useStore().rootStore;
    useEffect(() => {
      userStore.checkAuth();
    }, []);
    if (userStore.userId === null) {
      return <></>;
    } else {
      return <SpecificComponent {...props} />;
    }
  };

  return observer(AuthenticationCheck);
};
