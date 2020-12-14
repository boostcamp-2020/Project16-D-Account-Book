import io from 'socket.io-client';
const socket = io.connect(process.env.REACT_APP_BASE_URL as string);

export const event = {
  UPDATE_TRANSACTIONS: 'update transactions',
  JOIN: 'join',
  LEAVE: 'leave',
  UPDATE_ACCOUNTS: 'update accounts',
};

export default socket;
