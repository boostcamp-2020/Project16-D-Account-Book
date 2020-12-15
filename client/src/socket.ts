import io from 'socket.io-client';

const socket = io.connect(process.env.REACT_APP_BASE_URL as string);

export const event = {
  JOIN: 'join',
  LEAVE: 'leave',
  UPDATE_TRANSACTIONS: 'update transactions',
  UPDATE_ACCOUNTS: 'update accounts',
  UPDATE_INCOME_CATEGORIES: 'update income categories',
  UPDATE_EXPENDITURE_CATEGORIES: 'update expenditure categories',
};

export default socket;
