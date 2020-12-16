module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accountbook', [
      {
        id: 1,
        title: '일반 가계부',
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
        deleted_at: null,
      },
      {
        id: 2,
        title: '동아리',
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
        deleted_at: null,
      },
      {
        id: 3,
        title: '데모용 가계부',
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('accountbook', null, {});
  },
};
