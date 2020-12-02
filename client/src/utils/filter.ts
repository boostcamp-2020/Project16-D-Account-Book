import Income from '../types/income';
import Expenditure from '../types/expenditure';

interface Query {
  incomeCategory: string | string[] | null;
  expenditureCategory: string | string[] | null;
  account: string | string[] | null;
}

export const filtering = (
  transactions: Array<Income | Expenditure>,
  { incomeCategory, expenditureCategory, account }: Query,
): Array<Income | Expenditure> => {
  let filteredTransactions: Array<Income | Expenditure> = [];

  if ((!incomeCategory && !expenditureCategory) || !account) {
    return [];
  }

  if (incomeCategory) {
    const incomeCategories = (incomeCategory as string).split(' ');
    let filteredList = incomeCategoryFilter(transactions, incomeCategories);

    const accounts = (account as string).split(' ');
    filteredList = accountFilter(filteredList, accounts);

    filteredTransactions = [...filteredTransactions, ...filteredList];
  }

  if (expenditureCategory) {
    const expenditureCategories = (expenditureCategory as string).split(' ');
    let filteredList = expenditureCategoryFilter(transactions, expenditureCategories);

    const accounts = (account as string).split(' ');
    filteredList = accountFilter(filteredList, accounts);

    filteredTransactions = [...filteredTransactions, ...filteredList];
  }

  return filteredTransactions;
};

const incomeCategoryFilter = (
  transactions: Array<Income | Expenditure>,
  incomeCategories: Array<string>,
): Array<Income | Expenditure> => {
  const filteredTransactions = transactions.filter((transaction) => {
    const pass = incomeCategories.some((category) => {
      return transaction.category.name === category;
    });
    return pass;
  });
  return filteredTransactions;
};

const expenditureCategoryFilter = (
  transactions: Array<Income | Expenditure>,
  expenditureCategories: Array<string>,
): Array<Income | Expenditure> => {
  const filteredTransactions = transactions.filter((transaction) => {
    const pass = expenditureCategories.some((category) => {
      return transaction.category.name === category;
    });
    return pass;
  });
  return filteredTransactions;
};

const accountFilter = (
  transactions: Array<Income | Expenditure>,
  accounts: Array<string>,
): Array<Income | Expenditure> => {
  const filteredTransactions = transactions.filter((transaction) => {
    const pass = accounts.some((account) => {
      return transaction.account.name === account;
    });
    return pass;
  });
  return filteredTransactions;
};
