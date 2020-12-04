const db = require('@models');
const { Op } = require('sequelize');

const findIncomes = async (accountbookId, startDate, endDate) => {
  const incomes = await db.income.findAll({
    attributes: ['id', 'amount', 'content', 'date', 'memo'],
    where: {
      accountbookId,
      date: {
        [Op.gte]: new Date(startDate),
        [Op.lt]: new Date(endDate),
      },
    },
    include: [
      {
        model: db.incomeCategory,
        as: 'category',
        attributes: ['id', 'name', 'color'],
      },
      {
        model: db.account,
        attributes: ['id', 'name', 'color'],
      },
    ],
  });

  return incomes;
};

const findExpenditures = async (accountbookId, startDate, endDate) => {
  const expenditures = await db.expenditure.findAll({
    attributes: ['id', 'amount', 'place', 'date', 'memo'],
    where: {
      accountbookId,
      date: {
        [Op.gte]: new Date(startDate),
        [Op.lt]: new Date(endDate),
      },
    },
    include: [
      {
        model: db.expenditureCategory,
        as: 'category',
        attributes: ['id', 'name', 'color'],
      },
      {
        model: db.account,
        attributes: ['id', 'name', 'color'],
      },
    ],
  });

  return expenditures;
};

module.exports = {
  findIncomes,
  findExpenditures,
};
