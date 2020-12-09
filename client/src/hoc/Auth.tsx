import React, { useEffect } from 'react';
import useStore from '../hook/use-store/useStore';

export default (SpecificComponent: any): any => {
  const AuthenticationCheck = (props: any) => {
    const { userStore } = useStore().rootStore;
    useEffect(() => {
      userStore.checkAuth();
    }, []);
    return <SpecificComponent {...props} />;
  };

  return AuthenticationCheck;
};
