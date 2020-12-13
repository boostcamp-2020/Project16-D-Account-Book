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

const updateIncomeTransaction = async (ctx) => {
  const { income_id: incomeId } = ctx.request.params;
  const incomeData = ctx.request.body;
  const income = await transactionService.updateIncome(incomeId, incomeData);
  ctx.body = income;
};

const updateExpenditureTransaction = async (ctx) => {
  const { expenditure_id: expenditureId } = ctx.request.params;
  const expenditureData = ctx.request.body;
  const expenditure = await transactionService.updateExpenditure(expenditureId, expenditureData);
  ctx.body = expenditure;
};

const deleteIncomeTransaction = async (ctx) => {
  const { income_id: incomeId } = ctx.request.params;
  await transactionService.deleteIncomeById(incomeId);
  ctx.status = 204;
};

const deleteExpenditureTransaction = async (ctx) => {
  const { expenditure_id: expenditureId } = ctx.request.params;
  await transactionService.deleteExpenditureById(expenditureId);
  ctx.status = 204;
};

const parsingTextContent = (ctx) => {
  const { text } = ctx.request.body;
  if (!text) {
    const error = new Error('문자 내역이 존재하지 않습니다.');
    error.status = 400;
    throw error;
  }
  const result = transactionService.parsingTextContent(text);
  if (result.transactionType === '거절') {
    const error = new Error('승인 거절된 거래 내역은 가계부의 거래 내역으로 등록할 수 없습니다.');
    error.status = 400;
    throw error;
  }
  ctx.body = result;
};

module.exports = {
  findTransactions,
  createIncomeTransaction,
  createExpenditureTransaction,
  updateIncomeTransaction,
  updateExpenditureTransaction,
  deleteIncomeTransaction,
  deleteExpenditureTransaction,
  parsingTextContent,
};
