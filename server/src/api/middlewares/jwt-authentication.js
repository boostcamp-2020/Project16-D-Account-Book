const { generateToken, decodeToken } = require('@utils/jwt-utils');
const jwtConfig = require('@config/jwt');
const db = require('@models');

module.exports = async (ctx, next) => {
  const token = ctx.cookies.get('jwt');
  try {
    if (!token) {
      throw new Error('jwt토큰 없음');
    }
    const decoded = await decodeToken(token);
    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 1) {
      const newToken = generateToken(decoded);
      ctx.cookies.set('jwt', newToken, {
        httpOnly: true,
        maxAge: jwtConfig.cookieExpiresIn,
      });
      await db.user.update({ token: newToken }, { where: { id: decoded.id } });
    }
  } catch (err) {
    ctx.throw(401, err);
  }

  return next();
};
