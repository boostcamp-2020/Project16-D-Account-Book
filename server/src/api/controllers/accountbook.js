const accountbookService = require('@services/accountbook');
const { decodeToken } = require('@utils/jwt-utils');

const getAccountbooksByUserId = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  const decoded = decodeToken(token);
  const accountbooks = await accountbookService.getAccountbooksByUserId(decoded.userId);
  ctx.body = accountbooks;
};

const updateAccountbook = async (ctx) => {
  const { accountbook_id: accountbookId } = ctx.params;
  const accountbookData = ctx.request.body;
  const updatedAccountbook = await accountbookService.updateAccountbook(accountbookId, accountbookData);
  ctx.body = updatedAccountbook;

const createAccountbook = async (ctx) => {
  const accountbookData = ctx.request.body;
  const token = ctx.cookies.get('jwt');
  accountbookData.userId = decodeToken(token).userId;
  const createdAccountbook = await accountbookService.createAccountbook(accountbookData);
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
  updateAccountbook,
  createAccountbook,
  deleteAccountbook,
};
