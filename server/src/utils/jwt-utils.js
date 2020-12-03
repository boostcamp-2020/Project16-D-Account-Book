const jwt = require('jsonwebtoken');

const jwtConfig = require('@config/jwt');
const db = require('@models');

const generateToken = async (user) => {
  const jwtToken = jwt.sign({ iss: 'moa', userId: user.id }, jwtConfig.jwtSecretKey, {
    expiresIn: jwtConfig.jwtExpiresIn,
  });
  await db.user.update(
    { token: jwtToken },
    {
      where: {
        id: user.id,
      },
    },
  );
  return jwtToken;
};

const decodeToken = (token) => {
  jwt.verify(token, jwtConfig.jwtSecretKey, async (err, decoded) => {
    // jwt secret이 잘못되었다면
    if (err) {
      throw new Error('jwt secret이 잘못되었음');
    }
    const user = await db.user.findByPk(decoded.id);
    // 유저가 존재하지 않는다면
    if (!user) {
      throw new Error('decoded payload에 기재된 유저가 없음');
    }
    // 유저가 존재하지만 토큰값이 일치하지 않는다면
    if (user.token !== token) {
      throw new Error('decoded payload에 기재된 유저는 있지만, 서버에서 발행해준 jwt값과 일치하지 않음');
    }
    return [user, decoded];
  });
};

module.exports = {
  generateToken,
  decodeToken,
};
