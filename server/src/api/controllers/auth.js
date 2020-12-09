const jwtConfig = require('@config/jwt');
const { generateToken, decodeTokenForValidation } = require('@utils/jwt-utils');
const db = require('@models');

const getCurrentUser = async (ctx) => {
  const token = ctx.cookies.get('jwt');
  if (!token) {
    const error = new Error('jwt토큰 없음');
    error.status = 401;
    throw error;
  }
  const [decoded, user] = await decodeTokenForValidation(token);
  if (60 * 60 * 2 > Date.now() / 1000 - decoded.iat > 60 * 60 * 1) {
    const newToken = await generateToken(decoded.userId);
    ctx.cookies.set('jwt', newToken, {
      httpOnly: true,
      maxAge: jwtConfig.cookieExpiresIn,
    });
    await db.user.update({ token: newToken }, { where: { id: decoded.userId } });
  }
  ctx.body = user;
};

module.exports = {
  getCurrentUser,
};
