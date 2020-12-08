const Router = require('koa-router');
const categoryController = require('@controllers/category');

const router = new Router();

router.get('/income', categoryController.getIncomeCategories);
router.get('/expenditure', categoryController.getExpenditureCategories);
router.post('/income', categoryController.createIncomeCategory);
router.post('/expenditure', categoryController.createExpenditureCategory);
router.patch('/income/:income_category_id', categoryController.updateIncomeCategory);
router.patch('/expenditure/:expenditure_category_id', categoryController.updateExpenditureCategory);

module.exports = router;
