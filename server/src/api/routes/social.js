const Router = require('koa-router');
const verificationOfAuth = require('@middlewares/jwt-authentication');
const socialController = require('@controllers/social');
const { isAdmin, isAccountbookUser } = require('@middlewares/accountbook-auth');

const router = new Router();

router.get('/', verificationOfAuth, socialController.searchUser);
router.post('/', isAdmin, socialController.addUser);
router.get('/users', isAccountbookUser, socialController.findUsers);
router.delete('/', isAdmin, socialController.deleteUser);
router.patch('/:user_accountbook_id', isAdmin, socialController.updateAuthority);

module.exports = router;
