import RootStore from './RootStore';
import Accountbook from '../types/accountbook';
import { observable, action, makeObservable } from 'mobx';
import accountbookService from '../services/accountbook';

export default class AccountbookStore {
  rootStore: RootStore;

  @observable
  accountbooks: Accountbook[] = [];

  @observable
  accountbook: Accountbook | undefined = undefined;

  @observable
  isLoading = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  updateAccountbooks = async (): Promise<void> => {
    const accountbooks = await accountbookService.getAccountbooks();
    this.accountbooks = accountbooks;
  };

  updateAccountbookSettings = async (accountbook: Accountbook): Promise<void> => {
    this.accountbook = accountbook;
    this.isLoading = false;
  };

  updateAccountbook = async (accountbook: Accountbook): Promise<void> => {
    const updatedAccountbook = await accountbookService.updateAccountbook(accountbook);
    this.updateAccountbookById(updatedAccountbook);
  };

  @action
  updateAccountbookById = (accountbook: Accountbook): void => {
    this.updateAccountbooks();
    this.accountbook = accountbook;
  };

  @action
  deleteAccountbook = (AccountbookId: number): void => {
    this.accountbooks = this.accountbooks.filter((item) => item.accountbookId !== AccountbookId);
  };
}
