const dotenv = require('dotenv');

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(`Could't find .env file `);
}

module.exports = {
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: process.env.DB_DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
