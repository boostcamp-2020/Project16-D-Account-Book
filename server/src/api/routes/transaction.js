const Router = require('koa-router');
const transactionController = require('@controllers/transaction');
const { isAccountbookUser } = require('@middlewares/accountbookAuth');

const router = new Router();

router.get('/', isAccountbookUser, transactionController.findTransactions);
router.post('/income', isAccountbookUser, transactionController.createIncomeTransaction);
router.post('/expenditure', isAccountbookUser, transactionController.createExpenditureTransaction);
router.patch('/income/:income_id', isAccountbookUser, transactionController.updateIncomeTransaction);
router.patch('/expenditure/:expenditure_id', isAccountbookUser, transactionController.updateExpenditureTransaction);
router.delete('/income/:income_id', isAccountbookUser, transactionController.deleteIncomeTransaction);
router.delete('/expenditure/:expenditure_id', isAccountbookUser, transactionController.deleteExpenditureTransaction);
router.post('text-parsing', isAccountbookUser, transactionController.parsingTextContent);

module.exports = router;
