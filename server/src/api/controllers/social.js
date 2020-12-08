const socialService = require('@services/social');

const searchUser = async (ctx) => {
  const { user_email: email } = ctx.request.query;
  const user = await socialService.findUserByEmail(email);
  ctx.body = user;
};

const addUser = async (ctx) => {
  const { userId, accountbookId } = ctx.request.body;
  const addedUser = await socialService.addUser(accountbookId, userId);
  ctx.body = addedUser;
};

module.exports = {
  searchUser,
  addUser,
};
