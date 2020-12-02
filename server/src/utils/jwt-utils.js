const jwt = require('jsonwebtoken');
const jwtConfig = require('@config/jwt');

const generateToken = (user) => {
  const jwtToken = jwt.sign(
    {
      iss: 'moa',
      userId: user.id,
      provider: user.provider,
      email: user.email,
      nickname: user.email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@/g)[0].replace('@', ''),
      profileUrl: user.profileUrl,
    },
    jwtConfig.jwtSecretKey,
    { expiresIn: jwtConfig.jwtExpiresIn },
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
