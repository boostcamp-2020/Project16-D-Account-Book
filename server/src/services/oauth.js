const axios = require('axios');
const jwt = require('jsonwebtoken');

const oauthConfig = require('../config/oauth');
const db = require('../models');

const getNaverToken = async (code, state) => {
  const { data } = await axios.get(oauthConfig.naverUserToken, {
    params: {
      grant_type: 'authorization_code',
      client_id: oauthConfig.naverClientId,
      client_secret: oauthConfig.naverClientSecret,
      code,
      state,
    },
  });

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
    tokenType: data.toke_type,
  };
};

const getNaverUserInfo = async (code, state) => {
  const { accessToken } = await getNaverToken(code, state);
  const { data: userInfo } = await axios.get(oauthConfig.naverUserInfoURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

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
    oauthConfig.jwtSecretKey,
    { expiresIn: '2h' },
  );
  return jwtToken;
};

const findOrCreateUser = async (data) => {
  const [user] = await db.user.findOrCreate({
    where: {
      provider: 'naver',
      email: data.email,
      nickname: data.nickname,
      profileUrl: data.profile_image,
    },
  });

  return user;
};

module.exports = {
  getNaverUserInfo,
  generateToken,
  findOrCreateUser,
};
