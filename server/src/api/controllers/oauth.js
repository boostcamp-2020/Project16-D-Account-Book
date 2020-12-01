const oauthService = require('@services/oauth');
const oauthConfig = require('@config/oauth');
const jwtConfig = require('@config/jwt');

const { v4 } = require('uuid');

const getConfig = (provider) => {
  if (provider === 'naver') {
    return oauthConfig.naver;
  }
  if (provider === 'kakao') {
    return oauthConfig.kakao;
  }
  throw new Error();
};

const redirectToOauthLoginPage = async (ctx) => {
  try {
    const { provider } = ctx.params;
    const state = v4();
    const config = getConfig(provider);
    const oauthLoginPageURL = `${config.authorizationURL}?client_id=${config.clientId}&response_type=code&redirect_uri=${config.redirectURI}&state=${state}`;
    ctx.redirect(oauthLoginPageURL);
  } catch (err) {
    console.log(err);
    // TODO: 에러 핸들링 추후 학습하여 개선 필요
  }
};

const login = async (ctx) => {
  try {
    const { code, state } = ctx.request.query;
    const { provider } = ctx.params;
    const config = getConfig(provider);
    const oauthUser = await oauthService.getUserInfo(code, state, config);
    const ourServiceUser = await oauthService.findOrCreateUser(oauthUser);
    const jwtToken = oauthService.generateToken(ourServiceUser.toJSON());
    ctx.cookies.set('jwt', jwtToken, {
      httpOnly: true,
      maxAge: jwtConfig.cookieExpiresIn,
    });
  } catch (err) {
    console.log(err);
    // TODO : 에러 핸들링 추후 학습하여 개선 필요
  }
};

module.exports = {
  login,
  redirectToOauthLoginPage,
};
