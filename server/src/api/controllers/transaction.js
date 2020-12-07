const transactionService = require('@services/transaction');

const findTransactions = async (ctx) => {
  // eslint-disable-next-line camelcase
  const { start_date, end_date, accountbook_id } = ctx.request.query;
  const incomes = await transactionService.findIncomes(accountbook_id, start_date, end_date);
  const expenditures = await transactionService.findExpenditures(accountbook_id, start_date, end_date);
  const transactions = [...incomes, ...expenditures];
  ctx.body = transactions;
};

const createIncomeTransaction = async (ctx) => {
  const incomeData = ctx.request.body;
  const createdIncome = await transactionService.createIncome(incomeData);
  ctx.body = createdIncome;
};

const createExpenditureTransaction = async (ctx) => {
  const expenditureData = ctx.request.body;
  const createdExpenditure = await transactionService.createExpenditure(expenditureData);
  ctx.body = createdExpenditure;
};

module.exports = {
  findTransactions,
  createIncomeTransaction,
  createExpenditureTransaction,
};
