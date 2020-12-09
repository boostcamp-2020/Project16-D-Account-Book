const Router = require('koa-router');
const categoryController = require('@controllers/category');
const verificationOfAuth = require('@middlewares/jwt-authentication');

const router = new Router();

router.get('/income', verificationOfAuth, categoryController.getIncomeCategories);
router.get('/expenditure', verificationOfAuth, categoryController.getExpenditureCategories);
router.post('/income', verificationOfAuth, categoryController.createIncomeCategory);
router.post('/expenditure', verificationOfAuth, categoryController.createExpenditureCategory);
router.patch('/income/:income_category_id', verificationOfAuth, categoryController.updateIncomeCategory);
router.patch('/expenditure/:expenditure_category_id', verificationOfAuth, categoryController.updateExpenditureCategory);
router.delete('/income/:income_category_id', verificationOfAuth, categoryController.deleteIncomeCategory);
router.delete(
  '/expenditure/:expenditure_category_id',
  verificationOfAuth,
  categoryController.deleteExpenditureCategory,
);

module.exports = router;
