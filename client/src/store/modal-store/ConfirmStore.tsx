import { observable, action, makeAutoObservable } from 'mobx';
import RootStore from '../RootStore';

export default class ConfirmStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  check = true;

  @observable
  text: string | string[] = '';

  @observable
  callback: (() => void) | undefined = undefined;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  confirm = ({ text, callback }: { text: string | string[]; callback: () => void }): void => {
    this.show = true;
    this.callback = callback;
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
