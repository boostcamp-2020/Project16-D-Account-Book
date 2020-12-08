const socialService = require('@services/social');

const searchUser = async (ctx) => {
  const { user_email: email } = ctx.request.query;
  const user = await socialService.findUserByEmail(email);
  ctx.body = user;
};

module.exports = {
  searchUser,
};
