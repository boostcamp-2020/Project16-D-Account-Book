const categoryService = require('@services/category');

const validateAccountbookId = (accountbookId) => {
  if (accountbookId === undefined) {
    throw new Error('accountbook id를 반드시 포함시키셔야 합니다.');
  }
};

const getIncomeCategories = async (ctx) => {
  const { accountbook_id: accountbookId } = ctx.request.query;
  validateAccountbookId(accountbookId);
  const incomeCategories = await categoryService.getIncomeCategoriesByAccountbookId(accountbookId);
  ctx.body = incomeCategories;
};

const getExpenditureCategories = async (ctx) => {
  const { accountbook_id: accountbookId } = ctx.request.query;
  validateAccountbookId(accountbookId);
  const expenditureCategories = await categoryService.getExpenditureCategoriesByAccountbookId(accountbookId);
  ctx.body = expenditureCategories;
};

const createIncomeCategory = async (ctx) => {
  const incomeCategoryData = ctx.request.body;
  const createdIncomeCategory = await categoryService.createIncomeCategory(incomeCategoryData);
  ctx.body = createdIncomeCategory;
};

const createExpenditureCategory = async (ctx) => {
  const expenditureCategoryData = ctx.request.body;
  const createdExpenditureCategory = await categoryService.createExpenditureCategory(expenditureCategoryData);
  ctx.body = createdExpenditureCategory;
};

const updateIncomeCategory = async (ctx) => {
  const { income_category_id: incomeCategoryId } = ctx.request.params;
  const incomeCategoryData = ctx.request.body;
  const updatedIncomeCategory = await categoryService.updateIncomeCategory(incomeCategoryId, incomeCategoryData);
  ctx.body = updatedIncomeCategory;
};

module.exports = {
  getIncomeCategories,
  getExpenditureCategories,
  createIncomeCategory,
  createExpenditureCategory,
  updateIncomeCategory,
};
