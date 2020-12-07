const Router = require('koa-router');
const accountbookController = require('@controllers/accountbook');

const router = new Router();

router.get('/', accountbookController.getAccountbooksByUserId);

module.exports = router;
