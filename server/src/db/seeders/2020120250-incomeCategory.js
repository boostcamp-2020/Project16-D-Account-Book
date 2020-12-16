module.exports = {
  up: async (queryInterface, Sequelize) => {
    const name = ['타행이체', '중고판매', '급여', '용돈', '사업수입', '금융수입'];
    const color = ['#1E90FF', '#0048BA', '#B0BF1A', '#7CB9E8', '#C9FFE5', '#B284BE'];
    // eslint-disable-next-line camelcase
    // const accountbook_id = [1, 1, 1, 1, 1, 1];
    // eslint-disable-next-line camelcase
    const created_at = ['2020-12-02', '2020-12-03', '2020-12-04', '2020-12-05', '2020-12-06', '2020-12-07'];
    // eslint-disable-next-line camelcase
    const deleted_at = [null, null, null, null, null, null];

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


    await queryInterface.bulkInsert('income_category', bulkData);
    await queryInterface.bulkInsert('income_category', bulkData2);
    await queryInterface.bulkInsert('income_category', bulkData3);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('income_category', null, {});
  },
};
