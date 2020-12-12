import { observable, action, makeAutoObservable, runInAction } from 'mobx';
import RootStore from '../RootStore';
import accountbookService from '../../services/accountbook';
import { UserAuthorType } from '../../types/user';

export default class DeleteAccountbookByUserStore {
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

    //TODO: accountbook 스토어에서도 삭제해야함
    runInAction(() => {
      this.rootStore.userStore.accountAuthorList = (this.rootStore.userStore
        .accountAuthorList as UserAuthorType[]).filter((author) => author.accountbookId !== this.selectedAccountbookId);
    });
  };
}
