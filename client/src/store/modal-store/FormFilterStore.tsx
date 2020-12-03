import { observable, action, makeObservable } from 'mobx';
import RootStore from '../RootStore';

export default class FormFilterStore {
  rootStore;
  @observable show = false;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  setShow(show: boolean): void {
    this.show = show;
  }
}
