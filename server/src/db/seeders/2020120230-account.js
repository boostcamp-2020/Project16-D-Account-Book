const { createBulkAccountData } = require('../../utils/bulk-data/createAccount');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('account', createBulkAccountData());
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('account', null, {});
  },
};
