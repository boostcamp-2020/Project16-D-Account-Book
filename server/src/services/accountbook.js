const db = require('@models');

const getAccountbookById = async (id) => {
  const accountbook = await db.accountbook.findOne({
    where: {
      id,
    },
  });

  if (accountbook === null) {
    throw new Error('accountbook이 존재하지 않습니다.');
  }

  return accountbook;
};

const getAccountbookByUserAccountbookId = async (id) => {
  const accountbook = await db.userAccountbook.findOne({
    where: {
      id,
    },
    attributes: ['id', 'authority', 'description', 'color', 'accountbookId'],
    include: [
      {
        model: db.accountbook,
        attributes: ['title'],
      },
    ],
    raw: true,
  });
  return accountbook;
};

const getAccountbooksByUserId = async (userId) => {
  const accountbooks = await db.userAccountbook.findAll({
    where: {
      userId,
    },
    attributes: ['id', 'authority', 'description', 'color', 'accountbookId'],
    include: [
      {
        model: db.accountbook,
        attributes: ['title'],
      },
    ],
    raw: true,
  });
  return accountbooks;
};

const getAccountbookByAccountbookId = async (userAccountbookId) => {
  const accountbook = await db.userAccountbook.findOne({
    where: {
      id: userAccountbookId,
    },
    attributes: ['id', 'authority', 'description', 'color', 'accountbookId'],
    include: [
      {
        model: db.accountbook,
        attributes: ['title'],
      },
    ],
    raw: true,
  });
  return accountbook;
};

const updateAccountbook = async (accountbookId, accountbookData) => {
  await db.accountbook.update({ title: accountbookData.title }, { where: { id: accountbookId } });
  await db.userAccountbook.update(
    { color: accountbookData.color, description: accountbookData.description },
    { where: { id: accountbookData.id } },
  );
  const updatedAccountbook = await getAccountbookByAccountbookId(accountbookData.id);
  return updatedAccountbook;
};

const createAccountbook = async ({ userId, title, description, color }) => {
  const newAccountbook = await db.accountbook.create({
    title,
  });
  const newUserAccountbook = await db.userAccountbook.create({
    description,
    color,
    userId,
    accountbookId: newAccountbook.toJSON().id,
    authority: true,
  });
  const createdAccountbook = await getAccountbookByUserAccountbookId(newUserAccountbook.toJSON().id);
  return createdAccountbook;
};

const deleteAccountbook = async (accountbookId, userId) => {
  await db.userAccountbook.destroy({ where: { accountbookId, userId } });
  const userAccountbooks = await db.userAccountbook.findAll({ where: { accountbookId } });
  if (userAccountbooks.length === 0) {
    db.accountbook.destroy({ where: { id: accountbookId } });
  }
};

module.exports = {
  getAccountbookById,
  getAccountbooksByUserId,
  updateAccountbook,
  deleteAccountbook,
  createAccountbook,
};
