const accountbookService = require('@services/accountbook');
const { decodeToken } = require('@utils/jwt-utils');

const getAccountbooksByUserId = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  const decoded = decodeToken(token);
  const accountbooks = await accountbookService.getAccountbooksByUserId(decoded.userId);
  ctx.body = accountbooks;
};

module.exports = {
  getAccountbooksByUserId,
};