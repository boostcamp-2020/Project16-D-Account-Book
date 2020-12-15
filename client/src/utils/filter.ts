import Income, { isIncome } from '../types/income';
import Expenditure from '../types/expenditure';
import Query from '../types/query';
import BoxChartValue from '../types/boxChartValue';
import { transaction } from 'mobx';
import { ICategoryValue } from '../types/category';
import { memo } from 'react';

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

export const getOnlyIncome = (transactions: Array<Income | Expenditure>): Array<Income> => {
  const result: Income[] = [];
  transactions.forEach((transaction) => {
    if (isIncome(transaction)) {
      result.push(transaction);
    }
  });
  return result;
};

export const getOnlyExpenditure = (transactions: Array<Income | Expenditure>): Array<Expenditure> => {
  const result: Expenditure[] = [];
  transactions.forEach((transaction) => {
    if (!isIncome(transaction)) {
      result.push(transaction);
    }
  });
  return result;
};

const getCategoryList = (
  transactions: Array<Income | Expenditure>,
): [memorized: Map<string, ICategoryValue>, totalValue: number] => {
  const memorized = new Map<string, ICategoryValue>();
  let totalValue = 0;

  transactions.forEach((transaction) => {
    const name = transaction.category.name;
    const color = transaction.category.color;
    const value = transaction.amount;

    if (!memorized.has(name)) {
      memorized.set(name, {
        title: name,
        color: color,
        value: 0,
      });
    }
    totalValue += value;
    const out = memorized.get(name);
    if (out !== undefined) {
      out.value += value;
    }
  });
  return [memorized, totalValue];
};

const getTopOfFiveList = (
  categoryList: ICategoryValue[],
  totalValue: number,
): [topOfFive: BoxChartValue[], remain: BoxChartValue[]] => {
  const categoryListWithRatio = categoryList.map((category) => {
    return {
      ...category,
      ratio: (category.value / totalValue) * 100,
    };
  });

  categoryListWithRatio.sort(function (a, b) {
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  return [categoryListWithRatio.slice(0, 5), categoryListWithRatio.slice(5)];
};

export function getTopFiveCategory(transactions: Array<Income | Expenditure>): BoxChartValue[] {
  const [memorized, totalValue] = getCategoryList(transactions);
  if (totalValue === 0) {
    return [];
  }

  const categoryList = Array.from(memorized).map(([name, value]) => value);

  const [topOfFive, remain] = getTopOfFiveList(categoryList, totalValue);

  if (categoryList.length > 5) {
    const endOfFive = topOfFive[4];
    endOfFive.title = '기타';

    remain.forEach((transaction) => {
      endOfFive.value += transaction.value;
    });

    endOfFive.ratio = (endOfFive.value * 100) / totalValue;
  }

  topOfFive.sort(function (transactionPrev: BoxChartValue, transactionNext: BoxChartValue) {
    if (transactionPrev.ratio > transactionNext.ratio) {
      return -1;
    }
    if (transactionPrev.ratio === transactionNext.ratio) {
      return 0;
    }
    return 1;
  });

  return topOfFive;
}
