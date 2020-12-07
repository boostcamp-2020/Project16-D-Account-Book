const Router = require('koa-router');
const transactionController = require('@controllers/transaction');

const router = new Router();

router.get('/', transactionController.findTransactions);
router.post('/income', transactionController.createIncomeTransaction);
router.post('/expenditure', transactionController.createExpenditureTransaction);
router.patch('/income/:id', transactionController.updateIncomeTransaction);
router.patch('/expenditure/:id', transactionController.updateExpenditureTransaction);
module.exports = router;
