const Router = require('koa-router');

const router = new Router();

const oauthController = require('../controllers/oauth');

router.get('oauth/naver', oauthController.naverLogin);
router.get('oauth/kakao', oauthController.kakaoLogin);

module.exports = router;
