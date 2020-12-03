const transactionService = require('@services/transaction');

const findTransactions = async (ctx) => {
  // eslint-disable-next-line camelcase
  const { start_date, end_date, accountbook_id } = ctx.request.query;
  const incomes = await transactionService.findIncomes(accountbook_id, start_date, end_date);
  const expenditures = await transactionService.findExpenditures(accountbook_id, start_date, end_date);
  const transactions = [...incomes, ...expenditures];
  ctx.body = transactions;
};

module.exports = {
  findTransactions,
};
