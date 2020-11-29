const axios = require('axios');
const jwt = require('jsonwebtoken');
const qs = require('querystring');

const { oauthConfig, jwtConfig } = require('../config/oauth');
const db = require('../models');

const getNaverToken = async (code, state) => {
  const { data } = await axios.get(oauthConfig.naver.userTokenURL, {
    params: {
      grant_type: 'authorization_code',
      client_id: oauthConfig.naver.clientId,
      client_secret: oauthConfig.naver.clientSecret,
      code,
      state,
    },
  });

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
    tokenType: data.token_type,
  };
};

const getNaverUserInfo = async (code, state) => {
  const { accessToken } = await getNaverToken(code, state);
  const { data: userInfo } = await axios.get(oauthConfig.naver.userInfoURL, {
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
    jwtConfig.jwtSecretKey,
    { expiresIn: jwtConfig.jwtExpiresIn },
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

const getKakaoToken = async (code, state) => {
  const requestParams = {
    grant_type: 'authorization_code',
    client_id: oauthConfig.kakao.clientId,
    client_secret: oauthConfig.kakao.clientSecret,
    redirect_uri: oauthConfig.kakao.redirectURI,
    code,
    state,
  };
  const params = qs.stringify(requestParams);

  const { data } = await axios.post(oauthConfig.kakao.userTokenURL, params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;' },
  });

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
    tokenType: data.token_type,
  };
};

const getKakaoUserInfo = async (code, state) => {
  const { accessToken } = await getKakaoToken(code, state);
  const { data: userInfo } = await axios.get(oauthConfig.kakao.userInfoURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return userInfo;
};

const findOrCreateKakaoUser = async (data) => {
  const [user] = await db.user.findOrCreate({
    where: {
      provider: 'kakao',
      email: data.kakao_account.email,
      nickname: data.properties.nickname,
      profileUrl: data.properties.profile_image,
    },
  });

  return user;
};

module.exports = {
  getNaverUserInfo,
  generateToken,
  findOrCreateUser,
  getKakaoUserInfo,
  findOrCreateKakaoUser,
};
