import RootStore from './RootStore';
import Accountbook, { CreateAccountbookBody } from '../types/accountbook';
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

  createAccountbook = async ({ title, color, description }: CreateAccountbookBody): Promise<void> => {
    const accountbook = await accountbookService.createAccountbook({ title, color, description });
    this.addAccountbook(accountbook);
  };

  @action
  addAccountbook = (accountbook: Accountbook): void => {
    this.accountbooks.push(accountbook);
    this.rootStore.userStore.accountAuthorList?.push({
      accountbookId: accountbook.accountbookId as number,
      authority: true,
    });
  };
}
