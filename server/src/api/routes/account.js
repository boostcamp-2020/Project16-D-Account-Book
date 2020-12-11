const Router = require('koa-router');
const accountController = require('@controllers/account');
const { isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/', isAccountbookUser, accountController.getAccounts);
router.post('/', isAccountbookUser, accountController.createAccount);
router.patch('/:account_id', isAccountbookUser, accountController.updateAccount);
router.delete('/:account_id', isAccountbookUser, accountController.deleteAccount);

module.exports = router;
