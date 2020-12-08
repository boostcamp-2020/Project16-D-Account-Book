const Router = require('koa-router');

const socialController = require('@controllers/social');

const router = new Router();

router.get('/', socialController.searchUser);
router.post('/', socialController.addUser);
router.get('/users', socialController.findUsers);

module.exports = router;
