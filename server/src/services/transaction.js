const db = require('@models');
const { Op } = require('sequelize');

const findIncomes = async (accountbookId, startDate, endDate) => {
  const transactions = await db.income.findAll({
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

  return transactions;
};

module.exports = {
  findIncomes,
};
