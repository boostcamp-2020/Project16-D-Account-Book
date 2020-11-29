const koa = require('@loaders/koa');
const mysql = require('@loaders/mysql');

const server = async (app) => {
  await mysql();
  console.log('🎉 DB Connect! 🎉');

  await koa(app);
  console.log('🍟 Express Connect! 🍟');
};

module.exports = server;
