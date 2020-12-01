const jwt = require('jsonwebtoken');
const jwtConfig = require('@config/jwt');

const generateToken = (user) => {
  const jwtToken = jwt.sign(
    {
      provider: user.provider,
      email: user.email,
      nickname: user.nickname,
      profileUrl: user.profileUrl,
    },
    jwtConfig.jwtSecretKey,
    { expiresIn: jwtConfig.jwtExpiresIn },
  );
  return jwtToken;
};

module.exports = {
  generateToken,
};
