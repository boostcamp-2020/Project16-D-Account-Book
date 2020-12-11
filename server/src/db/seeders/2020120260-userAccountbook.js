module.exports = {
  up: async (queryInterface, Sequelize) => {
    const id = [1, 2, 3, 4, 5, 6, 7, 8];
    const authority = [true, false, false, false, false, true, false, false];
    const description = [
      '테스트용 accountbook',
      '테스트용 accountbook',
      '테스트용 accountbook',
      '테스트용 accountbook',
      '테스트용 accountbook',
      '테스트용 accountbook',
      '테스트용 accountbook',
      '테스트용 accountbook',
    ];
    const color = ['#1E90FF', '#1E90FF', '#1E90FF', '#1E90FF', '#1E90FF', '#1E90FF', '#1E90FF', '#1E90FF'];
    // eslint-disable-next-line camelcase
    const accountbook_id = [1, 1, 1, 1, 2, 2, 2, 2];
    // eslint-disable-next-line camelcase
    const user_id = [1, 2, 3, 4, 1, 2, 3, 4];
    // eslint-disable-next-line camelcase
    const created_at = [
      '2020-11-02',
      '2020-11-02',
      '2020-11-02',
      '2020-11-02',
      '2020-11-02',
      '2020-11-02',
      '2020-11-02',
      '2020-11-02',
    ];
    // eslint-disable-next-line camelcase
    const deleted_at = [null, null, null, null, null, null, null, null];

    const bulkData = id.map((item, index) => {
      return {
        id: id[index],
        authority: authority[index],
        description: description[index],
        color: color[index],
        accountbook_id: accountbook_id[index],
        user_id: user_id[index],
        created_at: created_at[index],
        deleted_at: deleted_at[index],
        updated_at: created_at[index],
      };
    });
    await queryInterface.bulkInsert('user_accountbook', bulkData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_accountbook', null, {});
  },
};
