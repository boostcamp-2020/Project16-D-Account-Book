module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('account', [
      {
        id: 1,
        name: '삼성카드',
        color: '1E90FF',
        accountbook_id: '1',
        deleted_at: null,
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
      },
      {
        id: 2,
        name: '국민카드',
        color: '0048BA',
        accountbook_id: '1',
        deleted_at: null,
        created_at: '2020-11-24',
        updated_at: '2020-11-24',
      },
      {
        id: 3,
        name: '농협카드',
        color: 'B0BF1A',
        accountbook_id: '1',
        deleted_at: null,
        created_at: '2020-11-25',
        updated_at: '2020-11-25',
      },
      {
        id: 4,
        name: '우리카드',
        color: '7CB9E8',
        accountbook_id: '1',
        deleted_at: null,
        created_at: '2020-11-26',
        updated_at: '2020-11-26',
      },
      {
        id: 5,
        name: '신한카드',
        color: 'C9FFE5',
        accountbook_id: '1',
        deleted_at: null,
        created_at: '2020-11-27',
        updated_at: '2020-11-27',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('account', null, {});
  },
};
