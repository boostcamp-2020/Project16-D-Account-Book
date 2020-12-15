const db = require('@models');
const { getAccountbookById } = require('@services/accountbook');

const getAccountsByAccountbookId = async (id) => {
  const accountBook = await getAccountbookById(id);
  const accounts = await accountBook.getAccounts({
    attributes: ['id', 'name', 'color'],
  });
  return accounts;
};

const findAccountById = async (id) => {
  const account = await db.account.findOne({
    attributes: ['id', 'name', 'color'],
    where: {
      id,
    },
  });
  return account;
};

const createAccount = async ({ accountbookId, name, color }) => {
  const duplicatedAccount = await db.account.findOne({
    where: { accountbookId, name },
  });
  if (duplicatedAccount) {
    throw new Error('이미 존재하는 결제수단입니다.');
  }

  const accountbook = await getAccountbookById(accountbookId);
  const createdAccount = await accountbook.createAccount({
    name,
    color,
  });
  const account = await findAccountById(createdAccount.toJSON().id);
  return account;
};

const updateAccount = async (accountId, { name, color }) => {
  const currentAccount = await db.account.findOne({ where: { id: accountId } });
  const duplicatedAccount = await db.account.findOne({
    where: { accountbookId: currentAccount.toJSON().accountbookId, name },
  });
  if (duplicatedAccount && duplicatedAccount.toJSON().color.toLowerCase() === color.toLowerCase()) {
    throw new Error('이미 존재하는 결제수단입니다.');
  }

  await db.account.update(
    {
      name,
      color,
    },
    {
      where: { id: accountId },
    },
  );
  const updatedAccount = await findAccountById(accountId);
  return updatedAccount;
};

const deleteAccount = async (id) => {
  await db.account.destroy({ where: { id } });
};

module.exports = {
  getAccountsByAccountbookId,
  createAccount,
  findAccountById,
  updateAccount,
  deleteAccount,
};
