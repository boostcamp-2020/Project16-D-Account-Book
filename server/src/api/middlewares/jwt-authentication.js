const { generateToken, decodeToken } = require('@utils/jwt-utils');
const jwtConfig = require('@config/jwt');

module.exports = async (ctx, next) => {
  const token = ctx.cookies.get('jwt');
  try {
    if (!token) {
      throw new Error('jwt토큰 없음');
    }
    const decodedToken = decodeToken(token);
    if (Date.now() / 1000 - decodedToken.iat > 60 * 60 * 2) {
      const newToken = generateToken(decodedToken);
      ctx.cookies.set('jwt', newToken, {
        httpOnly: true,
        maxAge: jwtConfig.cookieExpiresIn,
      });
    }
  } catch (err) {
    ctx.throw(401, err);
  }

  return next();
};
