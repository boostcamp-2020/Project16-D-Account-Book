const { decodeTokenForValidation } = require('@utils/jwt-utils');
const db = require('@models');

const getAuthority = async (token, accountbookId) => {
  try {
    if (!token) {
      throw new Error('jwt토큰 없음');
    }
    const [decoded, user] = await decodeTokenForValidation(token);
    const userAccountbook = await db.userAccountbook.findOne({ where: { userId: user.id, accountbookId } });
    if (userAccountbook === null) {
      return { authority: null };
    }
    return { authority: userAccountbook.authority };
  } catch (err) {
    err.status = 401;
    throw err;
  }
};

module.exports = {
  getAuthority,
};
