import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

export default class CreateAccountbookFormStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  check = true;

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
