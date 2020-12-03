const db = require('@models');

const getAccountbookById = async (id) => {
  const accountbook = await db.accountbook.findOne({
    where: {
      id,
    },
  });

  if (accountbook === null) {
    throw new Error('accountbook이 존재하지 않습니다.');
  }

  return accountbook;
};

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
