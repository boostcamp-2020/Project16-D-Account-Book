const authService = require('@services/auth');
const db = require('@models');

const findAccountbookId = async (ctx) => {
  let accountbookId;

  if (ctx.request.params.income_id) {
    const income = await db.income.findOne({ where: { id: ctx.request.params.income_id } });
    accountbookId = income.accountbookId;
  }
  if (ctx.request.params.expenditure_id) {
    const income = await db.expenditure.findOne({ where: { id: ctx.request.params.expenditure_id } });
    accountbookId = income.accountbookId;
  }
  if (ctx.request.params.income_category_id) {
    const category = await db.incomeCategory.findOne({ where: { id: ctx.request.params.income_category_id } });
    accountbookId = category.accountbookId;
  }
  if (ctx.request.params.expenditure_category_id) {
    const category = await db.expenditureCategory.findOne({
      where: { id: ctx.request.params.expenditure_category_id },
    });
    accountbookId = category.accountbookId;
  }
  if (ctx.request.params.account_id) {
    const category = await db.account.findOne({ where: { id: ctx.request.params.account_id } });
    accountbookId = category.accountbookId;
  }
  if (ctx.request.query.accountbook_id) {
    accountbookId = ctx.request.query.accountbook_id;
  }
  if (ctx.request.params.accountbook_id) {
    accountbookId = ctx.request.params.accountbook_id;
  }
  if (ctx.request.body.accountbookId) {
    accountbookId = ctx.request.body.accountbookId;
  }

  return accountbookId;
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
