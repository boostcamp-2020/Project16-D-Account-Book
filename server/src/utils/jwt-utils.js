const jwt = require('jsonwebtoken');

const jwtConfig = require('@config/jwt');
const db = require('@models');

const generateToken = async (id) => {
  const jwtToken = jwt.sign({ iss: 'moa', userId: id }, jwtConfig.jwtSecretKey, {
    expiresIn: jwtConfig.jwtExpiresIn,
  });
  await db.user.update(
    { token: jwtToken },
    {
      where: {
        id,
      },
    },
  );
  return jwtToken;
};

const decodeTokenForValidation = async (token) => {
  const decodedToken = jwt.verify(token, jwtConfig.jwtSecretKey, (err, decoded) => {
    if (err) {
      throw new Error('jwt secret이 잘못되었음');
    }
    return decoded;
  });
  let user = await db.user.findOne({
    where: { id: decodedToken.userId },
    attributes: ['id', 'provider', 'nickname', 'profileUrl', 'token', 'email'],
    include: {
      model: db.userAccountbook,
      attributes: ['authority', 'accountbookId'],
    },
  });
  if (!user) {
    throw new Error('decoded payload에 기재된 유저가 없음');
  }
  if (user.token !== token) {
    throw new Error('decoded payload에 기재된 유저는 있지만, 서버에서 발행해준 jwt값과 일치하지 않음');
  }
  user = user.toJSON();
  delete user.token;
  return [decodedToken, user];
};

const decodeToken = (token) => {
  const decoded = jwt.verify(token, jwtConfig.jwtSecretKey);
  return decoded;
};

module.exports = {
  generateToken,
  decodeToken,
  decodeTokenForValidation,
};
