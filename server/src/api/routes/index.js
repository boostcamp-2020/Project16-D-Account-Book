const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionsRouter = require('@routes/transactions');

const router = new Router();

router.use('oauth/', oauthRouter.routes());
router.use('transactions', transactionsRouter.routes());

module.exports = router;
