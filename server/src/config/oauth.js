const dotenv = require('dotenv');

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(`Could't find .env file `);
}

module.exports = {
  naver: {
    provider: 'naver',
    clientId: process.env.NAVER_CLIENT_ID,
    clientSecret: process.env.NAVER_CLIENT_SECRET,
    authorizationURL: 'http://nid.naver.com/oauth2.0/authorize',
    redirectURI: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api/oauth/callback/naver`,
    userTokenURL: 'https://nid.naver.com/oauth2.0/token',
    userInfoURL: 'https://openapi.naver.com/v1/nid/me',
  },
  kakao: {
    provider: 'kakao',
    clientId: process.env.KAKAO_CLIENT_ID,
    clientSecret: process.env.KAKAO_CLIENT_SECRET,
    authorizationURL: 'https://kauth.kakao.com/oauth/authorize',
    redirectURI: `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api/oauth/callback/kakao`,
    userTokenURL: 'https://kauth.kakao.com/oauth/token',
    userInfoURL: 'https://kapi.kakao.com/v2/user/me',
  },
};
