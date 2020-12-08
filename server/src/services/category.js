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

const findExpenditureCategoryById = async (id) => {
  const expenditureCategory = await db.expenditureCategory.findOne({
    attributes: ['id', 'name', 'color'],
    where: {
      id,
    },
  });
  return expenditureCategory;
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

const updateIncomeCategory = async (incomeCategoryId, { name, color }) => {
  await db.incomeCategory.update(
    {
      name,
      color,
    },
    {
      where: { id: incomeCategoryId },
    },
  );
  const updatedIncomeCategory = await findIncomeCategoryById(incomeCategoryId);
  return updatedIncomeCategory;
};

const updateExpenditureCategory = async (expenditureCategoryId, { name, color }) => {
  await db.expenditureCategory.update(
    {
      name,
      color,
    },
    {
      where: { id: expenditureCategoryId },
    },
  );
  const updatedExpenditureCategory = await findExpenditureCategoryById(expenditureCategoryId);
  return updatedExpenditureCategory;
};

const deleteIncomeCategory = async (id) => {
  await db.incomeCategory.destroy({ where: { id } });
};

const deleteExpenditureCategory = async (id) => {
  await db.expenditureCategory.destroy({ where: { id } });
};

module.exports = {
  getIncomeCategoriesByAccountbookId,
  getExpenditureCategoriesByAccountbookId,
  createIncomeCategory,
  createExpenditureCategory,
  updateIncomeCategory,
  updateExpenditureCategory,
  deleteIncomeCategory,
  deleteExpenditureCategory,
};
