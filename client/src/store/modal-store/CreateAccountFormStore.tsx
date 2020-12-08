import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

export default class CreateAccountFormStore {
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
  setShow = (show: boolean): void => {
    this.show = show;
  };
}
