const db = require('@models');
const { getAccountbookById } = require('@services/accountbook');

const getAccountsByAccountbookId = async (id) => {
  const accountBook = await getAccountbookById(id);
  const accounts = await accountBook.getAccounts({
    attributes: ['id', 'name', 'color'],
  });
  return accounts;
};

const createAccount = async (id, { name, color }) => {
  const accountbook = await getAccountbookById(id);

  const createdAccount = await accountbook.createAccount({
    name,
    color,
  });

  return createdAccount;
};

module.exports = {
  getAccountsByAccountbookId,
  createAccount,
};
