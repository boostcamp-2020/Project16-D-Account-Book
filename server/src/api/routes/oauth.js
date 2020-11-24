const Router = require('koa-router');

const router = new Router();

const naverLogin = require('../controllers/oauth');

router.get('/api/user/oauth/naver', naverLogin);

module.exports = router;
