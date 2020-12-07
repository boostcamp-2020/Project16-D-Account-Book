import CreateCategoryStore from './CreateCategoryStore';
import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';

export default class ModalStore {
  rootStore;
  formFilterStore;
  createCategoryStore;

  constructor(rootStore: RootStore) {
    this.createCategoryStore = new CreateCategoryStore(rootStore);
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
  }
}
