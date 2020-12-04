const db = require('@models');
const { getAccountbookById } = require('@services/accountbook');

const getAccountsByAccountbookId = async (id) => {
  const accountBook = await getAccountbookById(id);
  const accounts = await accountBook.getAccounts({
    attributes: ['id', 'name', 'color'],
  });
  return accounts;
};

module.exports = {
  getAccountsByAccountbookId,
};
