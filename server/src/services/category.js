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

const createIncomeCategory = async (id, { name, color }) => {
  const accountbook = await getAccountbookById(id);
  const createdIncomeCategory = await accountbook.createIncomeCategory({
    name,
    color,
  });

  return createdIncomeCategory;
};

const createExpenditureCategory = async (id, { name, color }) => {
  const accountbook = await getAccountbookById(id);
  const createdExpenditureCategory = await accountbook.createdExpenditureCategory({
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
