const dotenv = require('dotenv');

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(`Could't find .env file `);
}

module.exports = {
  naverClientId: process.env.NAVER_CLIENT_ID,
  naverClientSecret: process.env.NAVER_CLIENT_SECRET,
  naverState: process.env.NAVER_STATE,
  naverUserToken: 'https://nid.naver.com/oauth2.0/token',
  naverUserInfoURL: 'https://openapi.naver.com/v1/nid/me',
  jwtSecretKey: process.env.JWT_SECRET_KEY,
};
