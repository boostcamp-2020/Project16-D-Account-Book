const jwt = require('jsonwebtoken');
const jwtConfig = require('@config/jwt');

const generateToken = (user) => {
  const jwtToken = jwt.sign(
    {
      iss: 'moa',
      userId: user.id,
      provider: user.provider,
      nickname: user.email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@/g)[0].replace('@', ''),
    },
    jwtConfig.jwtSecretKey,
    { expiresIn: jwtConfig.jwtExpiresIn },
  );
  return jwtToken;
};

module.exports = {
  generateToken,
};
