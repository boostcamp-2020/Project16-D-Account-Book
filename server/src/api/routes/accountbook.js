const Router = require('koa-router');
const accountbookController = require('@controllers/accountbook');
const verificationOfAuth = require('@middlewares/jwtAuthentication');
const { isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/', verificationOfAuth, accountbookController.getAccountbooksByUserId);
router.post('/', isAccountbookUser, accountbookController.createAccountbook);
router.delete('/:accountbook_id', isAccountbookUser, accountbookController.deleteAccountbook);

module.exports = router;
