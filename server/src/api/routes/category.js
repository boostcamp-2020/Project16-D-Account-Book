const Router = require('koa-router');
const categoryController = require('@controllers/category');
const { isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/income', isAccountbookUser, categoryController.getIncomeCategories);
router.get('/expenditure', isAccountbookUser, categoryController.getExpenditureCategories);
router.post('/income', isAccountbookUser, categoryController.createIncomeCategory);
router.post('/expenditure', isAccountbookUser, categoryController.createExpenditureCategory);
router.patch('/income/:income_category_id', isAccountbookUser, categoryController.updateIncomeCategory);
router.patch('/expenditure/:expenditure_category_id', isAccountbookUser, categoryController.updateExpenditureCategory);
router.delete('/income/:income_category_id', isAccountbookUser, categoryController.deleteIncomeCategory);
router.delete('/expenditure/:expenditure_category_id', isAccountbookUser, categoryController.deleteExpenditureCategory);

module.exports = router;
