import { observable, makeObservable, runInAction, action } from 'mobx';
import React, { createContext } from 'react';
import Income from '../types/income';
import Expenditure from '../types/expenditure';
import { getTransactions } from '../services/transaction';
import RootStore from './RootStore';

export default class TransactionStore {
  @observable transactions: Array<Income | Expenditure> = [];
  rootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  async findTransactions(accountbookId: number, startDate: Date, endDate: Date): Promise<void> {
    const transactions = await getTransactions(accountbookId, startDate, endDate);
    runInAction(() => {
      this.transactions = transactions;
    });
  }
}
