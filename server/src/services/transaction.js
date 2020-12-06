const db = require('@models');
const { Op } = require('sequelize');
const { getAccountbookById } = require('@services/accountbook');

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

const createIncome = async ({ accountbookId, incomeCategoryId, accountId, amount, content, date, memo }) => {
  const accountbook = await getAccountbookById(accountbookId);

  const income = await accountbook.createIncome({
    amount,
    content,
    date,
    memo,
    incomeCategoryId,
    accountId,
  });

  const createdIncome = await db.income.findOne({
    attributes: ['id', 'amount', 'content', 'date', 'memo'],
    where: {
      id: income.id,
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

  return createdIncome;
};

module.exports = {
  findIncomes,
  findExpenditures,
  createIncome,
};
