const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const indexRouter = require('./routes');

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Koa server is listening to port ${port}`);
});

router.use('/', indexRouter.routes());
