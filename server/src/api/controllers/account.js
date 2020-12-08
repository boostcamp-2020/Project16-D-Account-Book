const accountService = require('@services/account');

const validateAccountBookQuery = (accountbookId) => {
  if (accountbookId === undefined) {
    throw new Error('accountbook id를 반드시 포함시켜야합니다.');
  }
};

const getAccounts = async (ctx) => {
  const { accountbook_id: accountbookId } = ctx.request.query;
  validateAccountBookQuery(accountbookId);
  const accounts = await accountService.getAccountsByAccountbookId(accountbookId);
  ctx.body = accounts;
};

const createAccount = async (ctx) => {
  const accountData = ctx.request.body;
  const createdAccount = await accountService.createAccount(accountData);
  ctx.body = createdAccount;
};

module.exports = {
  getAccounts,
  createAccount,
};
