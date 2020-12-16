module.exports = {
  up: async (queryInterface, Sequelize) => {
    const name = ['식사', '생활', '경조사', '교육', '주거/통신', '술/유흥', '문화/여가', '교통'];
    const color = ['#1E90FF', '#0048BA', '#B0BF1A', '#7CB9E8', '#C9FFE5', '#B284BE', '#84DE02', '#D3212D'];
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

    let id = 0;

    const bulkData = name.map((item, index) => {
      id += 1;
      return {
        id,
        name: name[index],
        color: color[index],
        accountbook_id: 1,
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });

    const bulkData2 = name.map((item, index) => {
      id += 1;
      return {
        id,
        name: name[index],
        color: color[index],
        accountbook_id: 2,
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });

    const bulkData3 = name.map((item, index) => {
      id += 1;
      return {
        id,
        name: name[index],
        color: color[index],
        accountbook_id: 3,
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });

    await queryInterface.bulkInsert('expenditure_category', bulkData);
    await queryInterface.bulkInsert('expenditure_category', bulkData2);
    await queryInterface.bulkInsert('expenditure_category', bulkData3);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('expenditure_category', null, {});
  },
};
