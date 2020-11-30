import { observable, makeObservable, runInAction, action } from 'mobx';
import React, { createContext } from 'react';
import Income from '../types/income';
import Expenditure from '../types/expenditure';
import { getTransactions } from '../services/transaction';

export default class TransactionStore {
  @observable transactions: Array<Income | Expenditure> = [];

  constructor() {
    makeObservable(this);
  }

  @action
  async findTransactions(accountbookId: number, startDate: Date, endDate: Date): Promise<void> {
    const transactions = await getTransactions(accountbookId, startDate, endDate);
    runInAction(() => {
      this.transactions = transactions;
    });
  }
}

export const TransactionContext = createContext<TransactionStore>(new TransactionStore());

export const TransactionProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <TransactionContext.Provider value={new TransactionStore()}>{children}</TransactionContext.Provider>;
};
