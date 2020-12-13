const Router = require('koa-router');

const router = new Router();

const authController = require('@controllers/auth');

router.get('/current', authController.getCurrentUser);
router.get('/authority', authController.getAuthority);

module.exports = router;
