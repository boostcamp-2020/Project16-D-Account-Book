const { getAccountbookById } = require('@services/accountbook');

const getIncomeCategoriesByAccountbookId = async (id) => {
  const accountbook = await getAccountbookById(id);
  const incomeCategories = await accountbook.getIncomeCategories({
    attributes: ['id', 'name', 'color'],
  });
  return incomeCategories;
};

const getExpenditureCategoriesByAccountbookId = async (id) => {
  const accountbook = await getAccountbookById(id);
  const expenditureCategories = await accountbook.getExpenditureCategories({
    attributes: ['id', 'name', 'color'],
  });

  return expenditureCategories;
};

module.exports = {
  getIncomeCategoriesByAccountbookId,
  getExpenditureCategoriesByAccountbookId,
};
