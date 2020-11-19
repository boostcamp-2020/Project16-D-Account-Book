const koa = require('./koa');

const server = async (app) => {
  await koa(app);
  console.log('🍟 Express Connect! 🍟');
};

module.exports = server;
