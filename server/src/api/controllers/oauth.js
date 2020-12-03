const oauthConfig = require('@config/oauth');
const jwtConfig = require('@config/jwt');
const oauthService = require('@services/oauth');
const { generateToken } = require('@utils/jwt-utils');

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
    ctx.throw(500, err);
  }
};

const login = async (ctx) => {
  try {
    const { code, state } = ctx.request.query;
    const { provider } = ctx.params;
    const config = getConfig(provider);
    const oauthUser = await oauthService.getUserInfo(code, state, config);
    const ourServiceUser = await oauthService.findOrCreateUser(oauthUser);
    const jwtToken = await generateToken(ourServiceUser);
    ctx.cookies.set('jwt', jwtToken, {
      httpOnly: true,
      maxAge: jwtConfig.cookieExpiresIn,
    });
    ctx.state.user = ourServiceUser;
  } catch (err) {
    ctx.throw(500, err);
  }
};

module.exports = {
  login,
  redirectToOauthLoginPage,
};
