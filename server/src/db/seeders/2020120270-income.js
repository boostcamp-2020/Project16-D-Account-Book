module.exports = {
  up: async (queryInterface, Sequelize) => {
    const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const amount = [3000, 500000, 3000000, 10000, 20000, 30000, 40000, 50000, 20000, 70000];
    const content = [
      '길에서 주움',
      '부스트캠프',
      '주식',
      '비고',
      '부업',
      '집앞',
      '장난감판매',
      '빚청산함',
      '계산기',
      '집앞',
    ];
    const date = [
      '2020-11-17',
      '2020-11-20',
      '2020-11-13',
      '2020-11-13',
      '2020-11-13',
      '2020-11-14',
      '2020-11-15',
      '2020-11-13',
      '2020-11-01',
      '2020-11-07',
    ];
    const memo = ['지갑주움', '월급', '주식', null, '부업', '아이폰판매', '장난감판매', '빚청산', '계산기판매', null];
    // eslint-disable-next-line camelcase
    const account_id = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
    // eslint-disable-next-line camelcase
    const accountbook_id = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // eslint-disable-next-line camelcase
    const income_category_id = [3, 3, 6, 1, 3, 2, 5, 1, 2, 2];
    // eslint-disable-next-line camelcase
    const created_at = [
      '2020-12-02',
      '2020-11-23',
      '2020-11-15',
      '2020-12-02',
      '2020-12-02',
      '2020-11-13',
      '2020-11-23',
      '2020-11-13',
      '2020-12-03',
      '2020-12-04',
    ];
    // eslint-disable-next-line camelcase
    const deleted_at = [null, null, null, null, null, null, null, null, null, null];

    const bulkData = id.map((item, index) => {
      return {
        id: id[index],
        amount: amount[index],
        content: content[index],
        date: date[index],
        memo: memo[index],
        account_id: account_id[index],
        accountbook_id: accountbook_id[index],
        income_category_id: income_category_id[index],
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });

    await queryInterface.bulkInsert('income', bulkData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('income', null, {});
  },
};
