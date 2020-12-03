module.exports = {
  up: async (queryInterface, Sequelize) => {
    const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const amount = [7500, 11200, 150000, 9900, 53800, 35000, 17000, 5700, 5300, 17000];
    const place = [
      '맘스터치',
      '샴푸',
      '장례식장',
      '인프런',
      '통신요금',
      '막걸리',
      '소설책',
      '택시비',
      '택시비',
      '소설책',
    ];
    const date = [
      '2020-12-01',
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
    const memo = [
      null,
      '할인중이었음',
      null,
      '타입스크립트 강의',
      'KT',
      '기억이안남',
      '아르테니스',
      null,
      '학교에서 집으로감',
      '마션',
    ];

    // eslint-disable-next-line camelcase
    const account_id = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
    // eslint-disable-next-line camelcase
    const accountbook_id = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    // eslint-disable-next-line camelcase
    const expenditure_category_id = [3, 3, 6, 1, 3, 2, 5, 1, 2, 2];
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
        place: place[index],
        date: date[index],
        memo: memo[index],
        account_id: account_id[index],
        accountbook_id: accountbook_id[index],
        expenditure_category_id: expenditure_category_id[index],
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });

    await queryInterface.bulkInsert('expenditure', bulkData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('expenditure', null, {});
  },
};
