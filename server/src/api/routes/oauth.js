const Router = require('koa-router');

const router = new Router();

const oauthController = require('@controllers/oauth');

router.get('/logout', oauthController.logout);
router.get('/callback/:provider', oauthController.login);

module.exports = router;
