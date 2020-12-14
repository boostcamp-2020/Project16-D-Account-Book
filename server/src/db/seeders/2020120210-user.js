module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        id: 1,
        provider: 'kakao',
        email: 'lacomaco122@gmail.com',
        nickname: 'lacomaco122',
        profile_url: 'https://i.imgur.com/0kGli9o.jpg',
        token: null,
        created_at: '2020-11-23',
        updated_at: '2020-11-23',
      },
      {
        id: 2,
        provider: 'kakao',
        email: 'dbsgusdn34@nate.com',
        nickname: 'dbsgusdn34',
        profile_url: 'http://k.kakaocdn.net/dn/bVj1JP/btqNf61kIPC/HNvrQA2X1Cylb17MxtPVm1/img_640x640.jpg',
        token: null,
        created_at: '2020-11-24',
        updated_at: '2020-11-24',
      },
      {
        id: 3,
        provider: 'naver',
        email: 'bhko0524@naver.com',
        nickname: 'bhko0524',
        profile_url: 'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
        token: null,
        created_at: '2020-11-25',
        updated_at: '2020-11-25',
      },
      {
        id: 4,
        provider: 'naver',
        email: 'mu1616@naver.com',
        nickname: 'mu1616',
        profile_url: 'https://ssl.pstatic.net/static/pwe/address/img_profile.png',
        token: null,
        created_at: '2020-11-26',
        updated_at: '2020-11-26',
      },
      {
        id: 5,
        provider: 'naver',
        email: 'yhw8258@naver.com',
        nickname: 'yhw8258',
        profile_url:
          'https://phinf.pstatic.net/contact/20190713_165/1563012670612Qex2W_JPEG/14593196_1755053014754528_1400338084_n.jpg',
        token: null,
        created_at: '2020-11-26',
        updated_at: '2020-11-26',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
