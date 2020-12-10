const Router = require('koa-router');
const categoryController = require('@controllers/category');
const { isAdmin, isAccountbookUser } = require('@middlewares/accountbook-auth');

const router = new Router();

router.get('/income', isAccountbookUser, categoryController.getIncomeCategories);
router.get('/expenditure', isAccountbookUser, categoryController.getExpenditureCategories);
router.post('/income', isAdmin, categoryController.createIncomeCategory);
router.post('/expenditure', isAdmin, categoryController.createExpenditureCategory);
router.patch('/income/:income_category_id', isAdmin, categoryController.updateIncomeCategory);
router.patch('/expenditure/:expenditure_category_id', isAdmin, categoryController.updateExpenditureCategory);
router.delete('/income/:income_category_id', isAdmin, categoryController.deleteIncomeCategory);
router.delete('/expenditure/:expenditure_category_id', isAdmin, categoryController.deleteExpenditureCategory);

module.exports = router;
