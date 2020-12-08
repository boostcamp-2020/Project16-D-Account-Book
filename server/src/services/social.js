const db = require('@models');

const findUserByEmail = async (email) => {
  const user = await db.user.findOne({ where: { email }, attributes: ['id', 'email', 'nickname', 'profileUrl'] });
  return user;
};

const addUser = async (accountbookId, userId) => {
  const user = await db.userAccountbook.findOne({ where: { userId } });

  if (user) {
    throw new Error('이미 가계부에 존재하는 유저입니다.');
  }

  await db.userAccountbook.create({ accountbookId, userId, color: '#000000', authority: 0 });
  const addedUser = await db.userAccountbook.findOne({
    where: { userId, accountbookId },
    attributes: ['id', 'authority'],
    include: [
      {
        model: db.user,
        as: 'user',
        attributes: ['id', 'nickname', 'email', 'profileUrl'],
      },
    ],
  });
  return addedUser;
};

module.exports = {
  findUserByEmail,
  addUser,
};
