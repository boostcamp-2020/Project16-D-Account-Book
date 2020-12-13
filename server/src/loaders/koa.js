const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('@koa/cors');

const indexRouter = require('@routes');
const { clientHost, clientPort } = require('@config/server');

const router = new Router();

const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = { message: err.message || 'Unknown Error' };
    ctx.app.emit('error', err, ctx);
  }
};

const origin = `${clientHost}${clientPort === '80' ? '' : `:${clientPort}`}`;
const koa = async (app) => {
  app.use(
    cors({
      origin,
      credentials: true,
    }),
  );
  app.use(bodyParser());
  app.use(logger());
  app.use(errorHandler);
  app.use(router.routes());
  app.use(router.allowedMethods());

  router.use('/api', indexRouter.routes());
};

module.exports = koa;
