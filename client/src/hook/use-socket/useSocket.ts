import { useEffect } from 'react';
import useGetParam from '../use-get-param/useGetParam';
import socket, { event } from '../../socket';

const useSocket = (): void => {
  const accountbookId = useGetParam();

  useEffect(() => {
    socket.emit(event.JOIN, accountbookId);
    return () => {
      socket.emit(event.LEAVE, accountbookId);
    };
  }, [accountbookId]);
};

export default useSocket;
