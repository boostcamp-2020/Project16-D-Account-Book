import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

export default class AlertStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  check = true;

  @observable
  text: string | string[] = '';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  alert = (text: string | string[]): void => {
    this.show = true;
    this.text = text;
  };

  @action
  toggleShow = (): void => {
    this.show = !this.show;
  };

  @action
  setShow = (show: boolean): void => {
    this.show = show;
  };
}
