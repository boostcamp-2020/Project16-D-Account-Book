const db = require('@models');

const axios = require('axios');
const qs = require('querystring');

const getAccessToken = async (code, state, config) => {
  const requestParams = {
    grant_type: 'authorization_code',
    client_id: config.clientId,
    client_secret: config.clientSecret,
    redirect_uri: config.redirectURI,
    code,
    state,
  };
  const params = qs.stringify(requestParams);

  const { data } = await axios.post(config.userTokenURL, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;' },
  });

  return data.access_token;
};

const getUserInfo = async (code, state, config) => {
  const accessToken = await getAccessToken(code, state, config);
  const { data } = await axios.get(config.userInfoURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  let userInfo;
  if (config.provider === 'naver') {
    userInfo = {
      provider: config.provider,
      email: data.response.email,
      nickname: data.response.nickname,
      profileUrl: data.response.profile_image,
    };
  } else if (config.provider === 'kakao') {
    userInfo = {
      provider: config.provider,
      email: data.kakao_account.email,
      nickname: data.properties.nickname,
      profileUrl: data.properties.profile_image,
    };
  }
  return userInfo;
};

const findOrCreateUser = async (oauthUser) => {
  const [user] = await db.user.findOrCreate({
    where: {
      provider: oauthUser.provider,
      email: oauthUser.email,
      nickname: oauthUser.nickname,
      profileUrl: oauthUser.profileUrl,
    },
  });
  return user;
};

module.exports = {
  getUserInfo,
  findOrCreateUser,
};
