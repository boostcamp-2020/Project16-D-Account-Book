const socialService = require('@services/social');

const searchUsers = async (ctx) => {
  const { user_email: email } = ctx.request.query;
  const user = await socialService.findUsersByEmail(email);
  ctx.body = user;
};

const addUser = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  const { userId, accountbookId } = ctx.request.body;
  const addedUser = await socialService.addUser(accountbookId, userId, token);
  ctx.body = addedUser;
};

const findUsers = async (ctx) => {
  const { accountbook_id: accountbookId } = ctx.request.query;
  const users = await socialService.findUsers(accountbookId);
  ctx.body = users;
};

const deleteUser = async (ctx) => {
  const { accountbook_id: accountbookId, user_id: userId } = ctx.request.query;
  await socialService.deleteUser(accountbookId, userId);
  ctx.status = 204;
};

const giveAdmin = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  const { user_accountbook_id: userAccountbookId } = ctx.request.params;
  const { authority } = ctx.request.body;
  const patchedUser = await socialService.giveAdmin(userAccountbookId, authority, token);
  ctx.body = patchedUser;
};

module.exports = {
  searchUsers,
  addUser,
  findUsers,
  deleteUser,
  giveAdmin,
};
