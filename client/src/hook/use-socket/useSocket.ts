import { useEffect } from 'react';
import useGetParam from '../use-get-param/useGetParam';
import socket, { event } from '../../socket';
import useStore from '../use-store/useStore';

const useSocket = (): void => {
  const { accountbookStore } = useStore().rootStore;
  const accountbookId = useGetParam();

  useEffect(() => {
    accountbookStore.currentAccountbookId = accountbookId;
    socket.emit(event.JOIN, accountbookId);
    return () => {
      socket.emit(event.LEAVE, accountbookId);
    };
  }, [accountbookId]);
};

export default useSocket;
