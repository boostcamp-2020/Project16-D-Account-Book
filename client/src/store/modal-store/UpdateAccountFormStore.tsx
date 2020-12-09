import { observable, action, makeAutoObservable, computed } from 'mobx';
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

  @computed
  get convertAccount(): Account | undefined {
    if (this.account === undefined) {
      return undefined;
    }

    if (this.account !== undefined) {
      return {
        id: this.account?.id,
        name: this.account?.name,
        color: this.account?.color,
      };
    }
  }
}
