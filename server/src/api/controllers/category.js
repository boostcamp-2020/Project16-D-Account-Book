const categoryService = require('@services/category');

const validateAccountbookId = (accountbookId) => {
  if (accountbookId === undefined) {
    throw new Error('accountbook id를 반드시 포함시키셔야 합니다.');
  }
};

const getIncomeCategories = async (ctx) => {
  const { accountbookId } = ctx.request.query;
  validateAccountbookId(accountbookId);
  const incomeCategories = await categoryService.getIncomeCategoriesByAccountbookId(accountbookId);
  ctx.body = incomeCategories;
};
const getExpenditureCategories = async (ctx) => {
  const { accountbookId } = ctx.request.query;
  validateAccountbookId(accountbookId);
  const expenditureCategories = await categoryService.getExpenditureCategoriesByAccountbookId(accountbookId);
  ctx.body = expenditureCategories;
};

module.exports = {
  getIncomeCategories,
  getExpenditureCategories,
};
