const Router = require('koa-router');

const router = new Router();

router.get('hello', (ctx, next) => {
  ctx.body = 'hello world';
});

module.exports = router;
