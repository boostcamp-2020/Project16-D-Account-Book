const accountService = require('@services/account');

const validateAccountBookQuery = (accountbook_id) => {
  if (accountbook_id === undefined) {
    throw new Error('accountbook id를 반드시 포함시켜야합니다.');
  }
};

const getAccounts = async (ctx) => {
  const { accountbook_id } = ctx.request.query;
  validateAccountBookQuery(accountbook_id);
  const accounts = await accountService.getAccountsByAccountbookId(accountbook_id);
  ctx.body = accounts;
};

module.exports = {
  getAccounts,
};
