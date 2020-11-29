const oauthService = require('../../services/oauth');

const naverLogin = async (ctx) => {
  const { code, state } = ctx.request.query;
  const { response: naverUser } = await oauthService.getNaverUserInfo(code, state);
  const ourServiceUser = await oauthService.findOrCreateUser(naverUser);
  const jwtToken = oauthService.generateToken(ourServiceUser.toJSON());
  ctx.body = { ourServiceUser, jwtToken };
};

const kakaoLogin = async (ctx) => {
  const { code, state } = ctx.request.query;
  const data = await oauthService.getKakaoUserInfo(code, state);
  const ourServiceUser = await oauthService.findOrCreateKakaoUser(data);
  const jwtToken = oauthService.generateToken(ourServiceUser.toJSON());
  ctx.body = { ourServiceUser, jwtToken };
};

module.exports = {
  naverLogin,
  kakaoLogin,
};
