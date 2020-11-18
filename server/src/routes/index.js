const Router = require('koa-router');

const router = new Router();

router.post('hello', (ctx, next) => {
  console.log(ctx.request.body);
  const data = { name: 'PEPSI', price: 3000 };
  ctx.body = data;
});

module.exports = router;
