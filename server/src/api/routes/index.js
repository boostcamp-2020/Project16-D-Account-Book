const Router = require('koa-router');
const oauthRouter = require('./oauth');

const router = new Router();

router.use('api/', oauthRouter.routes());

module.exports = router;
