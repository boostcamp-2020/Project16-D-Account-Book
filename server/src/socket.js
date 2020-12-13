const event = {
  CONNECT: 'connect',
  JOIN: 'join',
  LEAVE: 'leave',
  UPDATE_TRANSACTIONS: 'update transactions',
};

const connectOn = (io) => {
  io.on('connection', (socket) => {
    socket.on(event.JOIN, (accountbookId) => {
      socket.join(accountbookId);
    });

    socket.on(event.LEAVE, (accountbookId) => {
      socket.leave(accountbookId);
    });

    socket.on(event.UPDATE_TRANSACTIONS, (accountbookId) => {
      socket.in(accountbookId).emit(event.UPDATE_TRANSACTIONS, 'update transaction!');
    });
  });
};

module.exports = {
  connectOn,
};
