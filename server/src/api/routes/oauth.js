const Router = require('koa-router');

const router = new Router();

const oauthController = require('@controllers/oauth');

router.get('naver', oauthController.naverLogin);
router.get('kakao', oauthController.kakaoLogin);

module.exports = router;
