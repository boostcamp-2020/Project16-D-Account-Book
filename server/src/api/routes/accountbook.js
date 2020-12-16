const Router = require('koa-router');
const accountbookController = require('@controllers/accountbook');
const verificationOfAuth = require('@middlewares/jwtAuthentication');
const { isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/', verificationOfAuth, accountbookController.getAccountbooksByUserId);
router.patch('/:accountbook_id', isAccountbookUser, accountbookController.updateAccountbook);
router.post('/', verificationOfAuth, accountbookController.createAccountbook);
router.delete('/:accountbook_id', isAccountbookUser, accountbookController.deleteAccountbook);

module.exports = router;
