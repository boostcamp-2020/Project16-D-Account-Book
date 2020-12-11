const authService = require('@services/auth');
const db = require('@models');

const findAccountbookId = async (ctx) => {
  if (ctx.request.params.income_id) {
    const income = await db.income.findOne({ where: { id: ctx.request.params.income_id } });
    return income.accountbookId;
  }

  if (ctx.request.params.expenditure_id) {
    const expenditure = await db.expenditure.findOne({ where: { id: ctx.request.params.expenditure_id } });
    return expenditure.accountbookId;
  }

  if (ctx.request.params.income_category_id) {
    const incomeCategory = await db.incomeCategory.findOne({ where: { id: ctx.request.params.income_category_id } });
    return incomeCategory.accountbookId;
  }

  if (ctx.request.params.expenditure_category_id) {
    const expenditureCategory = await db.expenditureCategory.findOne({
      where: { id: ctx.request.params.expenditure_category_id },
    });
    return expenditureCategory.accountbookId;
  }

  if (ctx.request.params.account_id) {
    const account = await db.account.findOne({ where: { id: ctx.request.params.account_id } });
    return account.accountbookId;
  }

  if (ctx.request.params.user_accountbook_id) {
    const userAccountbook = await db.userAccountbook.findOne({ where: { id: ctx.request.params.user_accountbook_id } });
    return userAccountbook.accountbookId;
  }

  if (ctx.request.query.accountbook_id) {
    return ctx.request.query.accountbook_id;
  }

  if (ctx.request.params.accountbook_id) {
    return ctx.request.params.accountbook_id;
  }

  if (ctx.request.body.accountbookId) {
    return ctx.request.body.accountbookId;
  }

  return null;
};

const isAccountbookUser = async (ctx, next) => {
  const token = ctx.cookies.get('jwt');
  const accountbookId = await findAccountbookId(ctx);

  const { authority } = await authService.getAuthority(token, accountbookId);
  if (authority === null) {
    const error = new Error('가계부에 접근권한 없음');
    error.status = 403;
    throw error;
  }

  return next();
};

const isAdmin = async (ctx, next) => {
  const token = ctx.cookies.get('jwt');
  const accountbookId = await findAccountbookId(ctx);
  const { authority } = await authService.getAuthority(token, accountbookId);

  if (!authority) {
    const error = new Error('가계부의 관리자가 아닙니다.');
    error.status = 403;
    throw error;
  }

  return next();
};

module.exports = {
  isAccountbookUser,
  isAdmin,
};
