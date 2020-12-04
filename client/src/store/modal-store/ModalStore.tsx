import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';

export default class ModalStore {
  rootStore;
  formFilterStore;

  constructor(rootStore: RootStore) {
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
  }
}
