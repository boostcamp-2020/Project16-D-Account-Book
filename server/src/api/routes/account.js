const Router = require('koa-router');
const accountController = require('@controllers/account');
const verificationOfAuth = require('@middlewares/jwt-authentication');

const router = new Router();

router.get('/', verificationOfAuth, accountController.getAccounts);
router.post('/', verificationOfAuth, accountController.createAccount);
router.patch('/:account_id', verificationOfAuth, accountController.updateAccount);
router.delete('/:account_id', verificationOfAuth, accountController.deleteAccount);

module.exports = router;
