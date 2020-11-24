const Router = require('koa-router');

const router = new Router();

const naverLogin = require('../controllers/oauth');

router.get('/api/naver', naverLogin);

module.exports = router;
