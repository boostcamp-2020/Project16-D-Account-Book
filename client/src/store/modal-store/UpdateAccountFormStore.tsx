import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';
import Account from '../../types/account';

export default class UpdateAccountFormStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  account: Account | undefined = undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  toggleShow = (): void => {
    this.show = !this.show;
  };

  @action
  setShowTrue = (): void => {
    this.show = true;
  };

  @action
  setShowFalse = (): void => {
    this.show = false;
  };

  @action
  loadAccount = (account: Account): void => {
    this.account = account;
  };
}
