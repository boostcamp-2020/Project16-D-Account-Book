import FilterFormStore from './FilterFormStore';
import RootStore from '../RootStore';
import CreateTransactionFormStore from './CreateTransactionFormStore';
import UpdateTransactionFormStore from './UpdateTransactionFormStore';
import CreateAccountFormStore from './CreateAccountFormStore';
import CreateCategoryFormStore from './CreateCategoryFormStore';
import UpdateAccountFormStore from './UpdateAccountFormStore';
import UpdateCategoryFormStore from './UpdateCategoryFormStore';
import DeleteAccountbookByAdminStore from './DeleteAccountbookByAdminStore';
import DeleteAccountbookByUserStore from './DeleteAccountbookByUserStore';
import GiveAdminStore from './GiveAdminStore';
import CreateAccountbookFormStore from './CreateAccountbookFormStore';
import ConfirmStore from './ConfirmStore';
import AlertStore from './AlertStore';

export default class ModalStore {
  rootStore: RootStore;
  filterFormStore: FilterFormStore;
  createTransactionFormStore: CreateTransactionFormStore;
  updateTransactionFormStore: UpdateTransactionFormStore;
  createAccountFormStore: CreateAccountFormStore;
  createCategoryFormStore: CreateCategoryFormStore;
  updateAccountFormStore: UpdateAccountFormStore;
  updateCategoryFormStore: UpdateCategoryFormStore;
  deleteAccountbookByAdminStore: DeleteAccountbookByAdminStore;
  deleteAccountbookByUserStore: DeleteAccountbookByUserStore;
  giveAdminStore: GiveAdminStore;
  createAccountbookFormStore: CreateAccountbookFormStore;
  confirmStore: ConfirmStore;
  alertStore: AlertStore;

  constructor(rootStore: RootStore) {
    this.filterFormStore = new FilterFormStore(rootStore);
    this.rootStore = rootStore;
    this.createTransactionFormStore = new CreateTransactionFormStore(rootStore);
    this.updateTransactionFormStore = new UpdateTransactionFormStore(rootStore);
    this.createAccountFormStore = new CreateAccountFormStore(rootStore);
    this.createCategoryFormStore = new CreateCategoryFormStore(rootStore);
    this.updateAccountFormStore = new UpdateAccountFormStore(rootStore);
    this.updateCategoryFormStore = new UpdateCategoryFormStore(rootStore);
    this.deleteAccountbookByAdminStore = new DeleteAccountbookByAdminStore(rootStore);
    this.deleteAccountbookByUserStore = new DeleteAccountbookByUserStore(rootStore);
    this.giveAdminStore = new GiveAdminStore(rootStore);
    this.createAccountbookFormStore = new CreateAccountbookFormStore(rootStore);
    this.confirmStore = new ConfirmStore(rootStore);
    this.alertStore = new AlertStore(rootStore);
  }
}
