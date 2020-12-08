const db = require('@models');
const { getAccountbookById } = require('@services/accountbook');

const getIncomeCategoriesByAccountbookId = async (id) => {
  const accountBook = await getAccountbookById(id);
  const incomeCategories = await accountBook.getIncomeCategories({
    attributes: ['id', 'name', 'color'],
  });
  return incomeCategories;
};

const getExpenditureCategoriesByAccountbookId = async (id) => {
  const accountBook = await getAccountbookById(id);
  const expenditureCategories = await accountBook.getExpenditureCategories({
    attributes: ['id', 'name', 'color'],
  });
  return expenditureCategories;
};

const findIncomeCategoryById = async (id) => {
  const incomeCategory = await db.incomeCategory.findOne({
    attributes: ['id', 'name', 'color'],
    where: {
      id,
    },
  });
  return incomeCategory;
};

const createIncomeCategory = async ({ accountbookId, name, color }) => {
  const accountbook = await getAccountbookById(accountbookId);
  const createdIncomeCategory = await accountbook.createIncomeCategory({
    name,
    color,
  });
  return createdIncomeCategory;
};

const createExpenditureCategory = async ({ accountbookId, name, color }) => {
  const accountbook = await getAccountbookById(accountbookId);
  const createdExpenditureCategory = await accountbook.createExpenditureCategory({
    name,
    color,
  });
  return createdExpenditureCategory;
};

module.exports = {
  getIncomeCategoriesByAccountbookId,
  getExpenditureCategoriesByAccountbookId,
  createIncomeCategory,
  createExpenditureCategory,
};
