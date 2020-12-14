import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import RootStore from '../RootStore';
import accountbookService from '../../services/accountbook';
export default class GiveAdminStore {
  rootStore: RootStore;

  @observable
  show = false;

  @observable
  selectedAccountbookId = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  toggleShow = (): void => {
    this.show = !this.show;
  };

  @action
  setShow = (show: boolean): void => {
    this.show = show;
  };

  @action
  deleteAccountbook = async (): Promise<void> => {
    await accountbookService.deleteAccountbook(this.selectedAccountbookId);
    this.rootStore.userStore.deleteAuthor(this.selectedAccountbookId);
    this.rootStore.accountbookStore.deleteAccountbook(this.selectedAccountbookId);
  };
}
