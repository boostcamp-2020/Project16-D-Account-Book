const Router = require('koa-router');
const transactionController = require('@controllers/transaction');
const verificationOfAuth = require('@middlewares/jwt-authentication');

const router = new Router();

router.get('/', verificationOfAuth, transactionController.findTransactions);
router.post('/income', verificationOfAuth, transactionController.createIncomeTransaction);
router.post('/expenditure', verificationOfAuth, transactionController.createExpenditureTransaction);
router.patch('/income/:id', verificationOfAuth, transactionController.updateIncomeTransaction);
router.patch('/expenditure/:id', verificationOfAuth, transactionController.updateExpenditureTransaction);
router.delete('/income/:id', verificationOfAuth, transactionController.deleteIncomeTransaction);
router.delete('/expenditure/:id', verificationOfAuth, transactionController.deleteExpenditureTransaction);

module.exports = router;
