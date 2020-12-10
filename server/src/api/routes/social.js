const Router = require('koa-router');
const verificationOfAuth = require('@middlewares/jwt-authentication');
const socialController = require('@controllers/social');

const router = new Router();

router.get('/', verificationOfAuth, socialController.searchUser);
router.post('/', verificationOfAuth, socialController.addUser);
router.get('/users', verificationOfAuth, socialController.findUsers);
router.delete('/', verificationOfAuth, socialController.deleteUser);

module.exports = router;
