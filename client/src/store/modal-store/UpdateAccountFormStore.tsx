import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

export default class UpdateAccountFormStore {
  rootStore: RootStore;

  @observable
  show = false;

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
}
