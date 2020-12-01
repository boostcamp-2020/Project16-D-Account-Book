import { action } from 'mobx';
import React, { createContext } from 'react';
import DateStore from './DateStore';
import TransactionStore from './TransactionStore';
import { observable } from 'mobx';

export default class RootStore {
  @observable loading = true;
  dateStore;
  transactionStore;

  constructor() {
    this.dateStore = new DateStore(this);
    this.transactionStore = new TransactionStore(this);
  }

  @action
  setLoading(status: boolean): void {
    this.loading = status;
  }
}

export const RootContext = createContext<RootStore>(new RootStore());

export const RootProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <RootContext.Provider value={new RootStore()}>{children}</RootContext.Provider>;
};
