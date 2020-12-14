import RootStore from './RootStore';
import Accountbook from '../types/accountbook';
import { observable, action, makeObservable } from 'mobx';
import accountbookService from '../services/accountbook';

export default class AccountbookStore {
  rootStore: RootStore;

  @observable
  accountbooks: Accountbook[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  updateAccountbooks = async (): Promise<void> => {
    const accountbooks = await accountbookService.getAccountbooks();
    this.accountbooks = accountbooks;
  };

  @action
  deleteAccountbook = (AccountbookId: number): void => {
    this.accountbooks = this.accountbooks.filter((item) => item.accountbookId !== AccountbookId);
  };

  @action
  addAccountbook = (accountbook: Accountbook): void => {
    this.accountbooks.push(accountbook);
  };
}
