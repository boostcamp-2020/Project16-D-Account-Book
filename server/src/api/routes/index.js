const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');
const transactionRouter = require('@routes/transaction');
const categoryRouter = require('@routes/category');
const accountRouter = require('@routes/account');
const accountbookRouter = require('@routes/accountbook');
const socialRouter = require('@routes/social');

const router = new Router();

router.use('/oauth', oauthRouter.routes());
router.use('/transactions', transactionRouter.routes());
router.use('/categories', categoryRouter.routes());
router.use('/accounts', accountRouter.routes());
router.use('/accountbooks', accountbookRouter.routes());
router.use('/social', socialRouter.routes());

module.exports = router;
