import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';
import { observable, action, makeObservable } from 'mobx';

export default class ModalStore {
  rootStore;
  FormFilterStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.FormFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
  }
}
