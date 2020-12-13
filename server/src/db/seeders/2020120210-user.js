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
        provider: 'kakao',
        email: 'bhko0524@naver.com',
        nickname: 'bhko0524',
        profile_url: 'http://k.kakaocdn.net/dn/pvmbX/btqxUFwwYwc/LKCfn1SWdtUM579o5KEyC1/img_640x640.jpg',
        token: null,
        created_at: '2020-11-25',
        updated_at: '2020-11-25',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
