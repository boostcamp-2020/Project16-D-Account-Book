const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionsRouter = require('@routes/transactions');
const jwtMiddleware = require('@middlewares/jwt-authentication');

const router = new Router();

router.use('/oauth', oauthRouter.routes());
router.use('/transactions', transactionsRouter.routes());

// test를 위한 jwt middleware
// 2020.12.02 오전 스크럼 이후 삭제 예정
router.get('/', jwtMiddleware, (ctx) => {
  ctx.body = 'Hello World';
});

module.exports = router;
