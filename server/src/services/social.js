const db = require('@models');
const { decodeTokenForValidation } = require('@utils/jwt-utils');

const findUserByEmail = async (email) => {
  const user = await db.user.findOne({ where: { email }, attributes: ['id', 'email', 'nickname', 'profileUrl'] });
  return user;
};

const addUser = async (accountbookId, userId) => {
  console.log('here!!!!!!!!!!!!!!!!!!!!!');
  const user = await db.userAccountbook.findOne({ where: { userId, accountbookId } });

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

const findUsers = async (accountbookId) => {
  const users = await db.userAccountbook.findAll({
    where: { accountbookId },
    attributes: ['id', 'authority'],
    include: [
      {
        model: db.user,
        as: 'user',
        attributes: ['id', 'nickname', 'email', 'profileUrl'],
      },
    ],
  });
  return users;
};

const deleteUser = async (accountbookId, userId) => {
  await db.userAccountbook.destroy({ where: { accountbookId, userId } });
};

const giveAdmin = async (userAccountbookId, authority, token) => {
  await db.userAccountbook.update({ authority }, { where: { id: userAccountbookId } });
  const patchedUser = await db.userAccountbook.findOne({
    where: { id: userAccountbookId },
    attributes: ['id', 'authority', 'accountbookId'],
    include: [
      {
        model: db.user,
        as: 'user',
        attributes: ['id', 'nickname', 'email', 'profileUrl'],
      },
    ],
  });

  const [decoded, user] = await decodeTokenForValidation(token);
  await db.userAccountbook.update(
    { authority: 0 },
    { where: { accountbookId: patchedUser.toJSON().accountbookId, userId: user.id } },
  );

  return patchedUser;
};

module.exports = {
  findUserByEmail,
  addUser,
  findUsers,
  deleteUser,
  giveAdmin,
};
