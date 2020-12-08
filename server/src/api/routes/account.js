const Router = require('koa-router');
const accountController = require('@controllers/account');

const router = new Router();
router.get('/', accountController.getAccounts);
router.post('/', accountController.createAccount);
router.patch('/:account_id', accountController.updateAccount);

module.exports = router;
