import FormFilterStore from './FormFilterStore';
import RootStore from '../RootStore';
import CreateTransactionFormStore from './CreateTransactionFormStore';
import UpdateTransactionFormStore from './UpdateTransactionFormStore';
import CreateAccountFormStore from './CreateAccountFormStore';
import CreateCategoryFormStore from './CreateCategoryFormStore';
import UpdateAccountFormStore from './UpdateAccountFormStore';
import UpdateCategoryFormStore from './UpdateCategoryFormStore';

export default class ModalStore {
  rootStore: RootStore;
  formFilterStore: FormFilterStore;
  createTransactionFormStore: CreateTransactionFormStore;
  updateTransactionFormStore: UpdateTransactionFormStore;
  createAccountFormStore: CreateAccountFormStore;
  createCategoryFormStore: CreateCategoryFormStore;
  updateAccountFormStore: UpdateAccountFormStore;
  updateCategoryFormStore: UpdateCategoryFormStore;

  constructor(rootStore: RootStore) {
    this.formFilterStore = new FormFilterStore(rootStore);
    this.rootStore = rootStore;
    this.createTransactionFormStore = new CreateTransactionFormStore(rootStore);
    this.updateTransactionFormStore = new UpdateTransactionFormStore(rootStore);
    this.createAccountFormStore = new CreateAccountFormStore(rootStore);
    this.createCategoryFormStore = new CreateCategoryFormStore(rootStore);
    this.updateAccountFormStore = new UpdateAccountFormStore(rootStore);
    this.updateCategoryFormStore = new UpdateCategoryFormStore(rootStore);
  }
}
