const Router = require('koa-router');
const accountController = require('@controllers/account');
const { isAdmin, isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/', isAccountbookUser, accountController.getAccounts);
router.post('/', isAdmin, accountController.createAccount);
router.patch('/:account_id', isAdmin, accountController.updateAccount);
router.delete('/:account_id', isAdmin, accountController.deleteAccount);

module.exports = router;
