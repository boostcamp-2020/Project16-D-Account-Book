const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionsRouter = require('@routes/transactions');
const categoryRouter = require('@routes/category');
const accountRouter = require('@routes/account');

const router = new Router();

router.use('/oauth', oauthRouter.routes());
router.use('/transactions', transactionsRouter.routes());
router.use('/categories', categoryRouter.routes());
router.use('/accounts', accountRouter.routes());

module.exports = router;
