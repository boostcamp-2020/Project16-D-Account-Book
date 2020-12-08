const db = require('@models');

const findUserByEmail = async (email) => {
  const user = await db.user.findOne({ where: { email }, attributes: ['id', 'email', 'nickname', 'profileUrl'] });
  return user;
};

module.exports = {
  findUserByEmail,
};
