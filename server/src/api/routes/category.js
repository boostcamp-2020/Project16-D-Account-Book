const Router = require('koa-router');
const categoryController = require('@controllers/category');

const router = new Router();

router.get('/income', categoryController.getIncomeCategories);
router.get('/expenditure', categoryController.getExpenditureCategories);
router.post('/income', categoryController.createIncomeCategory);

module.exports = router;
