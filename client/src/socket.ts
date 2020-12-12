import io, { Socket } from 'socket.io-client';
const socket = io.connect(process.env.REACT_APP_BASE_URL as string);

// export const connectSocket = (accountbookId: number): typeof Socket => {
//   socket = io.connect(process.env.REACT_APP_BASE_URL as string);
//   return socket;
// };

// export const getSocket = (): typeof Socket => {
//   return socket;
// };

export const event = {
  UPDATE_TRANSACTIONS: 'update transactions',
  JOIN: 'join',
  LEAVE: 'leave',
};

export default socket;
