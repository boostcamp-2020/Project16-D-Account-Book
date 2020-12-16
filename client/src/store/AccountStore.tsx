import RootStore from './RootStore';
import Account, { AccountRequest } from '../types/account';
import AccountService from '../services/account';
import { observable, action, makeObservable, computed, flow } from 'mobx';
import Options from '../types/dropdownOptions';
import socket, { event } from '../socket';

export default class AccountStore {
  rootStore: RootStore;

  @observable
  accounts: Account[] = [];

  @observable
  accountNames: string[] = [];

  @observable
  isLoading = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  changeAccounts = (accounts: Account[]): void => {
    this.accounts = accounts;
    this.accountNames = accounts.map((item) => item.name);
  };

  updateAccounts = flow(function* (this: AccountStore, id: number) {
    const generator = AccountService.getAccountsById(id);
    const { value: cachedValue } = yield generator.next();
    if (cachedValue !== undefined) {
      this.changeAccounts(cachedValue);
      this.isLoading = false;
    } else {
      this.isLoading = true;
    }
    const { value: refreshedValue } = yield generator.next();
    this.changeAccounts(refreshedValue);
    this.isLoading = false;
  });

  createAccount = async (account: AccountRequest): Promise<void> => {
    const createdAccount = await AccountService.createAccount(account);
    this.addNewAccount(createdAccount);
  };

  @action
  addNewAccount = (account: Account): void => {
    this.accounts = [...this.accounts, account];
    this.accountNames = this.accounts.map((item) => item.name);
    socket.emit(event.UPDATE_ACCOUNTS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  deleteAccount = async (accountId: number): Promise<void> => {
    await AccountService.deleteAccount(accountId);
    this.deleteAccountById(accountId);
  };

  @action
  deleteAccountById = (accountId: number): void => {
    this.accounts = this.accounts.filter((item) => item.id !== accountId);
    this.accountNames = this.accounts.map((item) => item.name);
    socket.emit(event.UPDATE_ACCOUNTS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  updateAccount = async (account: AccountRequest, accountId: number): Promise<void> => {
    const updatedAccount = await AccountService.updateAccount(account, accountId);
    this.updateAccountById(updatedAccount);
    socket.emit(event.UPDATE_ACCOUNTS, this.rootStore.accountbookStore.currentAccountbookId);
  };

  @action
  updateAccountById = (account: Account): void => {
    this.accounts = this.accounts.map((item) => (item.id === account.id ? account : item));
    this.accountNames = this.accounts.map((item) => item.name);
  };

  @computed
  get accountOptions(): Options[] {
    const data: Options[] = this.accounts.map((account) => {
      return {
        value: account.id + '',
        label: account.name,
      };
    });

    return data;
  }

  @computed
  get accountFilterOptions(): Options[] {
    const data: Options[] = this.accounts.map((account) => {
      return {
        value: account.name,
        label: account.name,
      };
    });

    return data;
  }
}
