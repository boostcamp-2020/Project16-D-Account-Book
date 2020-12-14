import instance from '../api/axios';
import { getFormattedDate } from '../utils/date';
import Income, { IncomeRequest } from '../types/income';
import Expenditure, { ExpenditureRequest } from '../types/expenditure';
import querystring from 'querystring';
import { getIncomeCategoriesHandler } from '../__dummy-data__/api/category/getIncome';
import { MMSType } from '../types/TransactionForm';

const transactionAPIAddress = {
  getTransactions: '/api/transactions',
  createIncome: 'api/transactions/income',
  createExpenditure: 'api/transactions/expenditure',
  pathIncome: '/api/transactions/income',
  patchExpenditure: '/api/transactions/expenditure',
  deleteIncome: '/api/transactions/income',
  deleteExpenditure: '/api/transactions/expenditure',
  textParsing: '/api/transactions/text-parsing',
};

export default {
  getTransactions: async function* (
    accountbookId: number,
    startDate: Date,
    endDate: Date,
    beforeStartDate?: Date,
    afterEndDate?: Date,
  ): AsyncGenerator<Array<Income | Expenditure> | undefined> {
    const formattedStartDate = getFormattedDate({ date: startDate, format: '.' });
    const foramttedEndDate = getFormattedDate({ date: endDate, format: '.' });
    const gap = endDate.valueOf() - startDate.valueOf();

    const query = querystring.stringify({
      accountbook_id: accountbookId,
      start_date: formattedStartDate,
      end_date: foramttedEndDate,
    });
    const requestURL = transactionAPIAddress.getTransactions + `?${query}`;

    const item = sessionStorage.getItem(requestURL);
    if (item === null || item === undefined) {
      yield undefined;
    } else {
      yield JSON.parse(item) as Array<Income | Expenditure>;
    }

    // 이전 달 업데이트
    if (beforeStartDate !== undefined) {
      const beforeMonthQuery =
        transactionAPIAddress.getTransactions +
        `?` +
        querystring.stringify({
          accountbook_id: accountbookId,
          start_date: getFormattedDate({ date: beforeStartDate, format: '.' }),
          end_date: formattedStartDate,
        });
      instance.get(beforeMonthQuery).then((response) => {
        sessionStorage.setItem(beforeMonthQuery, JSON.stringify(response.data));
      });
    }

    // 다음 달 미리 캐싱
    if (afterEndDate !== undefined) {
      const beforeMonthQuery =
        transactionAPIAddress.getTransactions +
        `?` +
        querystring.stringify({
          accountbook_id: accountbookId,
          start_date: foramttedEndDate,
          end_date: getFormattedDate({ date: afterEndDate, format: '.' }),
        });

      instance.get(beforeMonthQuery).then((response) => {
        sessionStorage.setItem(beforeMonthQuery, JSON.stringify(response.data));
      });
    }

    const response = await instance.get(transactionAPIAddress.getTransactions, {
      params: {
        accountbook_id: accountbookId,
        start_date: formattedStartDate,
        end_date: foramttedEndDate,
      },
    });

    //캐시 업데이트
    sessionStorage.setItem(requestURL, JSON.stringify(response.data));
    yield response.data;
  },

  createIncome: async (income: IncomeRequest): Promise<Income> => {
    const response = await instance.post(transactionAPIAddress.createIncome, income);
    return response.data;
  },

  createExpenditure: async (expenditure: ExpenditureRequest): Promise<Expenditure> => {
    const response = await instance.post(transactionAPIAddress.createExpenditure, expenditure);
    return response.data;
  },

  patchIncome: async (income: IncomeRequest, incomeId: number): Promise<Income> => {
    const response = await instance.patch(transactionAPIAddress.pathIncome + `/${incomeId}`, income);
    return response.data;
  },
  patchExpenditure: async (expenditure: ExpenditureRequest, expenditureId: number): Promise<Expenditure> => {
    const response = await instance.patch(transactionAPIAddress.patchExpenditure + `/${expenditureId}`, expenditure);
    return response.data;
  },

  deleteIncome: async (incomeId: number): Promise<number> => {
    try {
      await instance.delete(transactionAPIAddress.deleteIncome + `/${incomeId}`);
      return incomeId;
    } catch (e) {
      throw new Error('정상적으로 삭제되지 않았습니다.');
    }
  },
  deleteExpenditure: async (expenditureId: number): Promise<number> => {
    try {
      await instance.delete(transactionAPIAddress.deleteExpenditure + `/${expenditureId}`);
      return expenditureId;
    } catch (e) {
      throw new Error('정상적으로 삭제되지 않았습니다.');
    }
  },
  parsingMMS: async (text: string): Promise<MMSType> => {
    const response = await instance.post(transactionAPIAddress.textParsing, {
      text: text,
    });
    return response.data;
  },
};
