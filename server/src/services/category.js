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
  const duplicateCategory = await db.incomeCategory.findOne({
    where: { accountbookId, name },
  });
  if (duplicateCategory) {
    throw new Error('이미 존재하는 카테고리 입니다.');
  }

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
  const currentCategory = await db.incomeCategory.findOne({ where: { id: incomeCategoryId } });
  const duplicateCategory = await db.incomeCategory.findOne({
    where: { accountbookId: currentCategory.toJSON().accountbookId, name },
  });
  if (duplicateCategory) {
    throw new Error('이미 존재하는 카테고리 입니다.');
  }

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
  const currentCategory = await db.expenditureCategory.findOne({ where: { id: expenditureCategoryId } });
  const duplicateCategory = await db.expenditureCategory.findOne({
    where: { accountbookId: currentCategory.toJSON().accountbookId, name },
  });
  if (duplicateCategory) {
    throw new Error('이미 존재하는 카테고리 입니다.');
  }

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
