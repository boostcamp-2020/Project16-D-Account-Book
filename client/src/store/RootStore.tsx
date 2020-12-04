import { action } from 'mobx';
import React, { createContext } from 'react';
import DateStore from './DateStore';
import CategoryStore from './CategoryStore';
import TransactionStore from './TransactionStore';
import ModalStore from './modal-store/ModalStore';
import AccountStore from './AccountStore';

export default class RootStore {
  dateStore;
  transactionStore;
  modalStore;
  categoryStore;
  accountStore;

  constructor() {
    this.dateStore = new DateStore(this);
    this.transactionStore = new TransactionStore(this);
    this.modalStore = new ModalStore(this);
    this.categoryStore = new CategoryStore(this);
    this.accountStore = new AccountStore(this);
  }
}

export const RootContext = createContext<RootStore>(new RootStore());

export const RootProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <RootContext.Provider value={new RootStore()}>{children}</RootContext.Provider>;
};
