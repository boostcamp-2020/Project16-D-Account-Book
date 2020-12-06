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
    // eslint-disable-next-line camelcase
    const { code, state, err, error_description } = ctx.request.query;
    if (err) {
      throw new Error(error_description);
    }

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
    ctx.body = ourServiceUser;
  } catch (e) {
    ctx.throw(500, e);
  }
};

const logout = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  try {
    if (!token) {
      throw new Error('jwt 토큰 없는 유저가 로그아웃 시도');
    }
    await oauthService.logout(token);
    ctx.cookies.set('jwt', null, {
      maxAge: 0,
      httpOnly: true,
    });
    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};

module.exports = {
  login,
  logout,
  redirectToOauthLoginPage,
};
