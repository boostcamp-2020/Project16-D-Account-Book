const Router = require('koa-router');
const accountbookController = require('@controllers/accountbook');
const verificationOfAuth = require('@middlewares/jwt-authentication');

const router = new Router();

router.get('/', verificationOfAuth, accountbookController.getAccountbooksByUserId);

module.exports = router;
