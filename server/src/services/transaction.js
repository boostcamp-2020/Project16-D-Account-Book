const db = require('@models');
const { Op } = require('sequelize');
const { getAccountbookById } = require('@services/accountbook');

const findIncomeById = async (id) => {
  const income = await db.income.findOne({
    attributes: ['id', 'amount', 'content', 'date', 'memo'],
    where: {
      id,
    },
    include: [
      {
        model: db.incomeCategory,
        as: 'category',
        attributes: ['id', 'name', 'color'],
        paranoid: false,
      },
      {
        model: db.account,
        attributes: ['id', 'name', 'color'],
        paranoid: false,
      },
    ],
  });

  return income;
};

const findExpenditureById = async (id) => {
  const expenditure = await db.expenditure.findOne({
    attributes: ['id', 'amount', 'place', 'date', 'memo'],
    where: {
      id,
    },
    include: [
      {
        model: db.expenditureCategory,
        as: 'category',
        attributes: ['id', 'name', 'color'],
        paranoid: false,
      },
      {
        model: db.account,
        attributes: ['id', 'name', 'color'],
        paranoid: false,
      },
    ],
  });

  return expenditure;
};

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
        paranoid: false,
      },
      {
        model: db.account,
        attributes: ['id', 'name', 'color'],
        paranoid: false,
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
        paranoid: false,
      },
      {
        model: db.account,
        attributes: ['id', 'name', 'color'],
        paranoid: false,
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

  const createdIncome = await findIncomeById(income.id);
  return createdIncome;
};

const createExpenditure = async ({ accountbookId, expenditureCategoryId, accountId, amount, place, date, memo }) => {
  const accountbook = await getAccountbookById(accountbookId);

  const expenditure = await accountbook.createExpenditure({
    amount,
    place,
    date,
    memo,
    expenditureCategoryId,
    accountId,
  });

  const createdExpenditure = await findExpenditureById(expenditure.id);
  return createdExpenditure;
};

const updateIncome = async (incomeId, { incomeCategoryId, accountId, amount, content, date, memo }) => {
  await db.income.update(
    {
      incomeCategoryId,
      accountId,
      amount,
      content,
      date,
      memo,
    },
    { where: { id: incomeId } },
  );

  const income = await findIncomeById(incomeId);
  return income;
};

const updateExpenditure = async (expenditureId, { expenditureCategoryId, accountId, amount, place, date, memo }) => {
  await db.expenditure.update(
    {
      expenditureCategoryId,
      accountId,
      amount,
      place,
      date,
      memo,
    },
    { where: { id: expenditureId } },
  );

  const expenditure = await findExpenditureById(expenditureId);
  return expenditure;
};

const deleteIncomeById = async (id) => {
  await db.income.destroy({ where: { id } });
};

const deleteExpenditureById = async (id) => {
  await db.expenditure.destroy({ where: { id } });
};

module.exports = {
  findIncomes,
  findExpenditures,
  createIncome,
  createExpenditure,
  updateIncome,
  updateExpenditure,
  deleteIncomeById,
  deleteExpenditureById,
};
