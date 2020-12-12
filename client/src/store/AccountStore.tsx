import RootStore from './RootStore';
import Account, { AccountRequest } from '../types/account';
import AccountService from '../services/account';
import { observable, action, makeObservable, computed, flow } from 'mobx';
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

  updateAccounts = flow(function* (this: AccountStore, id: number) {
    const generator = AccountService.getAccountsById(id);
    const { value: cachedValue } = yield generator.next();
    if (cachedValue !== undefined) {
      this.changeAccounts(cachedValue);
      this.accountNames = cachedValue.map((item) => item.name);
    }
    const { value: refreshedValue } = yield generator.next();
    this.changeAccounts(refreshedValue);
    this.accountNames = refreshedValue.map((item) => item.name);
  });

  createAccount = async (account: AccountRequest): Promise<void> => {
    const createdAccount = await AccountService.createAccount(account);
    this.addNewAccount(createdAccount);
  };

  @action
  addNewAccount = (account: Account): void => {
    this.accounts = [...this.accounts, account];
  };

  deleteAccount = async (accountId: number): Promise<void> => {
    await AccountService.deleteAccount(accountId);
    this.deleteAccountById(accountId);
  };

  @action
  deleteAccountById = (accountId: number): void => {
    this.accounts = this.accounts.filter((item) => item.id !== accountId);
  };

  updateAccount = async (account: AccountRequest, accountId: number): Promise<void> => {
    const updatedAccount = await AccountService.updateAccount(account, accountId);
    this.updateAccountById(updatedAccount);
  };

  @action
  updateAccountById = (account: Account): void => {
    this.accounts = this.accounts.map((item) => (item.id === account.id ? account : item));
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
