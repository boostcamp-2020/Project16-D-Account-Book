const axios = require('axios');
const qs = require('querystring');
const jwt = require('jsonwebtoken');

const db = require('@models');
const jwtConfig = require('@config/jwt');

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
      nickname: data.response.email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@/g)[0].replace('@', ''),
      profileUrl: data.response.profile_image,
    };
  } else if (config.provider === 'kakao') {
    userInfo = {
      provider: config.provider,
      email: data.kakao_account.email,
      nickname: data.kakao_account.email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@/g)[0].replace('@', ''),
      profileUrl: data.properties.profile_image ? data.properties.profile_image : 'https://i.imgur.com/0kGli9o.jpg',
    };
  }
  return userInfo;
};

const findOrCreateUser = async (oauthUser) => {
  const [ourServiceUser, isNew] = await db.user.findOrCreate({
    where: {
      provider: oauthUser.provider,
      email: oauthUser.email,
    },
    defaults: {
      provider: oauthUser.provider,
      email: oauthUser.email,
      nickname: oauthUser.nickname,
      profileUrl: oauthUser.profileUrl,
    },
  });
  if (!isNew) {
    if (ourServiceUser.profileUrl !== oauthUser.profileUrl) {
      await db.user.update({ profileUrl: oauthUser.profileUrl }, { where: { id: ourServiceUser.id } });
    }
  }

  const ourServiceUserInfo = {
    id: ourServiceUser.id,
    provider: ourServiceUser.provider,
    nickname: ourServiceUser.nickname,
    profileUrl: ourServiceUser.profileUrl,
  };

  return ourServiceUserInfo;
};

const logout = async (token) => {
  const decoded = jwt.verify(token, jwtConfig.jwtSecretKey);
  await db.user.update({ token: null }, { where: { id: decoded.id } });
};

module.exports = {
  getUserInfo,
  findOrCreateUser,
  logout,
};
