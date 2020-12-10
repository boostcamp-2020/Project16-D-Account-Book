const Router = require('koa-router');

const router = new Router();

const authController = require('@controllers/auth');

router.get('/current', authController.getCurrentUser);

module.exports = router;
