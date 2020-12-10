const dotenv = require('dotenv');

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(" Couldn't find .env file ");
}

module.exports = {
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.SERVER_PORT,
  clientHost: process.env.CLIENT_HOST,
  clientPort: process.env.CLIENT_PORT,
};
