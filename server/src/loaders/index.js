const koa = require('./koa');
const mysql = require("./mysql");

const server = async (app) => {
  await mysql();
  console.log('🎉 DB Connect! 🎉');

  await koa(app);
  console.log('🍟 Express Connect! 🍟');
};

module.exports = server;
