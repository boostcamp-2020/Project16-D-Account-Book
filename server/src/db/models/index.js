const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('@config/db');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const config = dbConfig[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  timezone: '+09:00',
});

fs.readdirSync('./src/models')
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(`./${file}`)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
