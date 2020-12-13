import RootStore from './RootStore';
import Accountbook from '../types/accountbook';
import { observable, action, makeObservable } from 'mobx';
import accountbookService from '../services/accountbook';

export default class AccountStore {
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
}
