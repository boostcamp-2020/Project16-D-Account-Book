const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionsRouter = require('@routes/transactions');
const categoryRouter = require('@routes/category');

const router = new Router();

router.use('/oauth', oauthRouter.routes());
router.use('/transactions', transactionsRouter.routes());
router.use('/categories', categoryRouter.routes());

module.exports = router;
