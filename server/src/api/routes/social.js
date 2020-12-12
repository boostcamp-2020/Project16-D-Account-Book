const Router = require('koa-router');
const verificationOfAuth = require('@middlewares/jwtAuthentication');
const socialController = require('@controllers/social');
const { isAdmin, isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/', verificationOfAuth, socialController.searchUsers);
router.post('/', isAccountbookUser, socialController.addUser);
router.get('/users', isAccountbookUser, socialController.findUsers);
router.delete('/', isAdmin, socialController.deleteUser);
router.patch('/:user_accountbook_id', isAdmin, socialController.giveAdmin);

module.exports = router;
