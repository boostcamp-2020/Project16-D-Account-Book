import RootStore from './RootStore';
import Account, { AccountRequest } from '../types/account';
import AccountService from '../services/account';
import { observable, action, makeObservable, computed } from 'mobx';
import Options from '../types/dropdownOptions';
export default class AccountStore {
  rootStore;

  @observable
  accounts: Account[] = [];

  @observable
  accountNames: string[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  changeAccounts = (accounts: Account[]): void => {
    this.accounts = accounts;
  };

  updateAccounts = async (id: number): Promise<void> => {
    const accounts = await AccountService.getAccountsById(id);
    this.changeAccounts(accounts);
    this.accountNames = accounts.map((item) => item.name);
  };

  createAccount = async (account: AccountRequest): Promise<void> => {
    const createdAccount = await AccountService.createAccount(account);
    this.addNewAccount(createdAccount);
  };

  @action
  addNewAccount = (account: Account): void => {
    this.accounts = [...this.accounts, account];
    this.accountNames = this.accounts.map((item) => item.name);
  };

  deleteAccount = async (accountId: number): Promise<void> => {
    await AccountService.deleteAccount(accountId);
    this.deleteAccountById(accountId);
  };

  @action
  deleteAccountById = (accountId: number): void => {
    this.accounts = this.accounts.filter((item) => item.id !== accountId);
    this.accountNames = this.accounts.map((item) => item.name);
  };

  updateAccount = async (account: AccountRequest, accountId: number): Promise<void> => {
    const updatedAccount = await AccountService.updateAccount(account, accountId);
    this.updateAccountById(updatedAccount);
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
