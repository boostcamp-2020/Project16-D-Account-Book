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
  const decodedToken = jwt.verify(token, jwtConfig.jwtSecretKey);
  return decodedToken;
};

module.exports = {
  generateToken,
  decodeToken,
};
