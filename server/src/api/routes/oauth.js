const Router = require('koa-router');

const router = new Router();

const naverLogin = require('@controllers/oauth');

router.get('naver', naverLogin);

module.exports = router;
