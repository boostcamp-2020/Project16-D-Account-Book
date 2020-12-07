const Router = require('koa-router');
const accountController = require('@controllers/account');

const router = new Router();
router.get('/', accountController.getAccounts);

module.exports = router;
