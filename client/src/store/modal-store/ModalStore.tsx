import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';
import CreateTransactionFormStore from './CreateTransactionFormStore';
import UpdateTransactionFormStore from './UpdateTransactionFormStore';
export default class ModalStore {
  rootStore: RootStore;
  formFilterStore: FormFilterStore;
  createTransactionFormStore: CreateTransactionFormStore;
  updateTransactionFormStore: UpdateTransactionFormStore;
  constructor(rootStore: RootStore) {
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
    this.createTransactionFormStore = new CreateTransactionFormStore(rootStore);
    this.updateTransactionFormStore = new UpdateTransactionFormStore(rootStore);
  }
}
