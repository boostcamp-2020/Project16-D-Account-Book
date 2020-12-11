module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('accountbook', [
      {
        id: 1,
        title: 'accountbook1',
        gmt: 9,
        start_day: true,
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
        deleted_at: null,
      },
      {
        id: 2,
        title: 'accountbook2',
        gmt: 9,
        start_day: true,
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
        deleted_at: null,
      },
      {
        id: 3,
        title: 'accountbook3',
        gmt: 9,
        start_day: true,
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
