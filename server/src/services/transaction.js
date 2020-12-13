/* eslint-disable prefer-destructuring */
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

const parsingTextContent = (text) => {
  const textTokenization = (string) => {
    return string
      .replace(/\[web발신\]/i, '')
      .trim()
      .split(/[\s\n\r]/g);
  };

  const result = {};

  const transactionTypeToken = text.match('취소|거절');
  result.transactionType = transactionTypeToken ? transactionTypeToken[0] : '승인';

  if (result.transactionType === '거절') {
    return result;
  }

  const isDepositToken = text.match('입금');
  result.isDeposit = !!(isDepositToken || result.transactionType === '취소');
  const tokens = textTokenization(text);
  tokens.forEach((token, i) => {
    if (i === 0) {
      const cardName = token.replace(/[[\]]/gi, '').substring(0, 2).toUpperCase();
      result.cardname = cardName;
    }
    if (token.includes('원') && !result.amount) {
      result.amount = Number(token.match(/[0-9]+(,?[0-9]+)+/)[0].replace(/,/g, ''));
      return;
    }
    if (token.includes(':')) {
      result.time = token.match(/[0-9]{2}:[0-9]{2}/)[0];
    }
    if (token.includes('/')) {
      result.date = token.match(/[0-9]{2}\/[0-9]{2}/)[0];
    }
  });
  return result;
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
  parsingTextContent,
};
