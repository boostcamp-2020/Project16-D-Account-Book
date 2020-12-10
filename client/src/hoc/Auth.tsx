import React, { useEffect } from 'react';
import useStore from '../hook/use-store/useStore';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';

export default (SpecificComponent: any): any => {
  const AuthenticationCheck = (props: any) => {
    const { userStore } = useStore().rootStore;
    const params = useParams<any>();

    useEffect(() => {
      // 로그인 검증
      userStore.checkAuth();

      // 선택한 가계부에대한 authority 검증
      if (params.id) {
        userStore.checkAuthority(params.id);
      }
    }, []);
    if (userStore.userId === null || userStore.isAdmin === null) {
      return <></>;
    } else {
      return <SpecificComponent {...props} />;
    }
  };

  return observer(AuthenticationCheck);
};
