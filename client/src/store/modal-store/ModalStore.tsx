// import CreateCategoryStore from './CreateCategoryStore';
import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';
import CreateTransactionFormStore from './CreateTransactionFormStore';
export default class ModalStore {
  rootStore: RootStore;
  formFilterStore: FormFilterStore;
  createTransactionFormStore: CreateTransactionFormStore;
  // createCategoryStore: CreateCategoryStore;

  constructor(rootStore: RootStore) {
    // this.createCategoryStore = new CreateCategoryStore(rootStore);
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
    this.createTransactionFormStore = new CreateTransactionFormStore(rootStore);
  }
}
