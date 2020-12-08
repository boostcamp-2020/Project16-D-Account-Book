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
  const accountbook = await getAccountbookById(accountbookId);
  const createdAccount = await accountbook.createAccount({
    name,
    color,
  });
  return createdAccount;
};

const updateAccount = async (accountId, { name, color }) => {
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

module.exports = {
  getAccountsByAccountbookId,
  createAccount,
  findAccountById,
  updateAccount,
};
