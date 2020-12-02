import React from 'react';
import dummyOptions from '../../../__dummy-data__/components/inputs/dummyOptions';
import { ITransactionForm, FormActionType } from '../../../types/TransactionForm';
import { createDummyTransactionFormReducerState } from '../../../__dummy-data__/components/modal/modalTransactions';
import { formReducer } from '../../../hook/use-transaction-form/useTransactionForm';
describe('TransactionFormReducer 테스트', () => {
  let reducerState: ITransactionForm;
  beforeEach(() => {
    reducerState = createDummyTransactionFormReducerState();
  });
  test('CLASSIFY_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.CLASSIFY_CHANGE,
      data: false,
    });

    expect(result.classify).toBe(false);
  });
  test('PRICE_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.PRICE_CHANGE,
      data: 500,
    });
    expect(result.price).toBe(500);
  });
  test('CATEGORIES_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.CATEGORIES_CHANGE,
      data: 'changeValue',
    });
    expect(result.categories).toBe('changeValue');
  });
  test('ACCOUNTS_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.ACCOUNTS_CHANGE,
      data: 'changeAccounts',
    });
    expect(result.accounts).toBe('changeAccounts');
  });
  test('CONTENT_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.CONTENT_CHANGE,
      data: 'changeContent',
    });

    expect(result.content).toBe('changeContent');
  });
  test('DATE_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.DATE_CHANGE,
      data: 'changeDate',
    });
    expect(result.date).toBe('changeDate');
  });
  test('MEMO_CHANGE 테스트', () => {
    const result = formReducer(reducerState, {
      type: FormActionType.MEMO_CHANGE,
      data: 'changeMemo',
    });
    expect(result.memo).toBe('changeMemo');
  });
});
