const { decodeTokenForValidation } = require('@utils/jwt-utils');

module.exports = async (ctx, next) => {
  const token = ctx.cookies.get('jwt');
  try {
    if (!token) {
      throw new Error('jwt토큰 없음');
    }
    await decodeTokenForValidation(token);
  } catch (err) {
    ctx.throw(401, err);
  }

  return next();
};
