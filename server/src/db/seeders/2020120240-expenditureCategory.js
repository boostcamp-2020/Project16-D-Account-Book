module.exports = {
  up: async (queryInterface, Sequelize) => {
    const id = [1, 2, 3, 4, 5, 6, 7, 8];
    const name = ['식사', '생활', '경조사', '교육', '주거/통신', '술/유흥', '문화/여가', '교통'];
    const color = ['tomato', 'dodgerblue', 'red', 'green', 'blue', 'yellow', 'lightgray', 'silver'];
    // eslint-disable-next-line camelcase
    const accountbook_id = [1, 1, 1, 1, 1, 1, 1, 1];
    // eslint-disable-next-line camelcase
    const created_at = [
      '2020-11-06',
      '2020-11-23',
      '2020-11-15',
      '2020-12-02',
      '2020-12-02',
      '2020-11-13',
      '2020-11-23',
      '2020-11-13',
    ];
    // eslint-disable-next-line camelcase
    const deleted_at = [null, null, null, null, null, null, null, null, null, null];

    const bulkData = id.map((item, index) => {
      return {
        id: id[index],
        name: name[index],
        color: color[index],
        accountbook_id: accountbook_id[index],
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });

    await queryInterface.bulkInsert('expenditure_category', bulkData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('expenditure_category', null, {});
  },
};
