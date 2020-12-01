import React, { createContext } from 'react';
import DateStore from './DateStore';
import TransactionStore from './TransactionStore';

export default class RootStore {
  dateStore;
  transactionStore;

  constructor() {
    this.dateStore = new DateStore(this);
    this.transactionStore = new TransactionStore(this);
  }
}

export const RootContext = createContext<RootStore>(new RootStore());

export const RootProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <RootContext.Provider value={new RootStore()}>{children}</RootContext.Provider>;
};
