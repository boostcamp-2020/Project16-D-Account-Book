import { observable, action, makeAutoObservable, computed } from 'mobx';
import RootStore from '../RootStore';
import Account from '../../types/account';

export default class UpdateAccountFormStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  check = true;

  @observable
  noChange = true;

  @observable
  orginalAccountName = '';

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
  setCheckTrue = (): void => {
    this.check = true;
  };

  @action
  setCheckFalse = (): void => {
    this.check = false;
  };

  @action
  setNoChangeTrue = (): void => {
    this.noChange = true;
  };

  @action
  setNoChangeFalse = (): void => {
    this.noChange = false;
  };

  @action
  loadAccount = (account: Account): void => {
    this.account = account;
  };

  @action
  loadOriginalAccount = (accountName: string): void => {
    this.orginalAccountName = accountName;
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
