const Router = require('koa-router');
const oauthRouter = require('@routes/oauth');

const router = new Router();

router.use('oauth/', oauthRouter.routes());

module.exports = router;
