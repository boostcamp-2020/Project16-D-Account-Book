import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';
import CreateTransactionFormStore from './CreateTransactionFormStore';
export default class ModalStore {
  rootStore;
  formFilterStore;
  createTransactionFormStore;

  constructor(rootStore: RootStore) {
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
    this.createTransactionFormStore = new CreateTransactionFormStore(rootStore);
  }
}
