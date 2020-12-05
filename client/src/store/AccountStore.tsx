import RootStore from './RootStore';
import Account from '../types/account';
import AccountService from '../services/account';
import { observable, action, makeObservable, computed } from 'mobx';
import { Options } from '../types/options';
export default class AccountStore {
  rootStore;

  @observable
  accounts: Account[] = [];

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
}
