const Router = require('koa-router');
const transactionController = require('@controllers/transaction');

const router = new Router();

router.get('/', transactionController.findTransactions);

// router.get('naver', oauthController.naverLogin);
// router.get('kakao', oauthController.kakaoLogin);

module.exports = router;
