const oauthConfig = require('@config/oauth');
const jwtConfig = require('@config/jwt');
const { clientHost, clientPort } = require('@config/server');
const oauthService = require('@services/oauth');
const { generateToken } = require('@utils/jwt-utils');

const getConfig = (provider) => {
  if (provider === 'naver') {
    return oauthConfig.naver;
  }
  if (provider === 'kakao') {
    return oauthConfig.kakao;
  }
  throw new Error();
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
    const jwtToken = await generateToken(ourServiceUser.id);
    ctx.cookies.set('jwt', jwtToken, {
      httpOnly: true,
      maxAge: jwtConfig.cookieExpiresIn,
    });
    ctx.state.user = ourServiceUser;
    ctx.body = ourServiceUser;
    ctx.redirect(`${clientHost}:${clientPort}/`);
  } catch (err) {
    ctx.throw(401, err);
  }
};

const logout = async (ctx) => {
  try {
    const token = ctx.cookies.get('jwt');
    await oauthService.logout(token);
    ctx.cookies.set('jwt', null, {
      maxAge: 0,
      httpOnly: true,
    });
    ctx.status = 200;
  } catch (err) {
    ctx.throw(401, err);
  }
};

module.exports = {
  login,
  logout,
};
