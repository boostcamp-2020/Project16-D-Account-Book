const accountbookService = require('@services/accountbook');
const { decodeToken } = require('@utils/jwt-utils');

const getAccountbooksByUserId = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  const decoded = decodeToken(token);
  const accountbooks = await accountbookService.getAccountbooksByUserId(decoded.userId);
  ctx.body = accountbooks;
};

const createAccountbook = async (ctx) => {
  const { title, description, color } = ctx.request.body;
  const token = ctx.cookies.get('jwt');
  const decoded = decodeToken(token);
  const createdAccountbook = await accountbookService.createAccountbook(decoded.userId, title, description, color);
  ctx.body = createdAccountbook;
};

const deleteAccountbook = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  const { accountbook_id: accountbookId } = ctx.params;
  const decoded = decodeToken(token);
  await accountbookService.deleteAccountbook(accountbookId, decoded.userId);
  ctx.status = 204;
};

module.exports = {
  getAccountbooksByUserId,
  createAccountbook,
  deleteAccountbook,
};
