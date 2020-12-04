const categoryService = require('@services/category');

const validateAccountbookId = (accountbook_id) => {
  if (accountbook_id === undefined) {
    throw new Error('accountbook id를 반드시 포함시키셔야 합니다.');
  }
};

const getIncomeCategories = async (ctx) => {
  const { accountbook_id } = ctx.request.query;
  validateAccountbookId(accountbook_id);
  const incomeCategories = await categoryService.getIncomeCategoriesByAccountbookId(accountbook_id);
  ctx.body = incomeCategories;
};
const getExpenditureCategories = async (ctx) => {
  const { accountbook_id } = ctx.request.query;
  validateAccountbookId(accountbook_id);
  const expenditureCategories = await categoryService.getExpenditureCategoriesByAccountbookId(accountbook_id);
  ctx.body = expenditureCategories;
};

module.exports = {
  getIncomeCategories,
  getExpenditureCategories,
};
