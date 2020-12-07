const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionRouter = require('@routes/transaction');
const categoryRouter = require('@routes/category');
const accountbookRouter = require('@routes/accountbook');

const router = new Router();

router.use('/oauth', oauthRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/categories', categoryRouter.routes());
router.use('/accountbooks', accountbookRouter.routes());

module.exports = router;
