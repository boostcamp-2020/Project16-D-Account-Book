const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionRouter = require('@routes/transaction');
const categoryRouter = require('@routes/category');

const router = new Router();

router.use('/oauth', oauthRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/categories', categoryRouter.routes());

module.exports = router;
