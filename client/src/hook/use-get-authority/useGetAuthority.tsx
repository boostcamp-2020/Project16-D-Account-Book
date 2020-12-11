import { useEffect } from 'react';
import useStore from '../use-store/useStore';

const useGetAuthority = (): void => {
  const { userStore } = useStore().rootStore;
  console.log('useGetAuthority call');
  useEffect(() => {
    userStore.getAuthority();
  }, []);
};

export default useGetAuthority;
