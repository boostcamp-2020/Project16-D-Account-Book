const axios = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('querystring');

const { jwtConfig } = require('@config/oauth');
const db = require('@models');

const getToken = async (code, state, config) => {
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

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
    tokenType: data.token_type,
  };
};

const getUserInfo = async (code, state, config) => {
  const { accessToken } = await getToken(code, state, config);
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

const generateToken = (user) => {
  const jwtToken = jwt.sign(
    {
      provider: user.provider,
      email: user.email,
      nickname: user.nickname,
      profileUrl: user.profileUrl,
    },
    jwtConfig.jwtSecretKey,
    { expiresIn: jwtConfig.jwtExpiresIn },
  );
  return jwtToken;
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
  generateToken,
  findOrCreateUser,
};
