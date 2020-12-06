const Router = require('koa-router');

const router = new Router();

const oauthController = require('@controllers/oauth');

router.get('/:provider', oauthController.redirectToOauthLoginPage);
router.get('/callback/:provider', oauthController.login);
router.get('/logout', oauthController.logout);

module.exports = router;
