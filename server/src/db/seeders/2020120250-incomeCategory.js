module.exports = {
  up: async (queryInterface, Sequelize) => {
    const id = [1, 2, 3, 4, 5, 6];
    const name = ['타행이체', '중고판매', '급여', '용돈', '사업수입', '금융수입'];
    const color = ['tomato', 'dodgerblue', 'red', 'blue', 'green', 'silver'];
    // eslint-disable-next-line camelcase
    const accountbook_id = [1, 1, 1, 1, 1, 1];
    // eslint-disable-next-line camelcase
    const created_at = ['2020-12-02', '2020-12-03', '2020-12-04', '2020-12-05', '2020-12-06', '2020-12-07'];
    // eslint-disable-next-line camelcase
    const deleted_at = [null, null, null, null, null, null];

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
    await queryInterface.bulkInsert('income_category', bulkData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('income_category', null, {});
  },
};
