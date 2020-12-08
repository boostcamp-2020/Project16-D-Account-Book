import { observable, action, makeObservable, runInAction } from 'mobx';
import { SearchedUser, UserAccountbook } from '../types/user';
import RootStore from './RootStore';
import socialService from '../services/social';

export default class DateStore {
  rootStore: RootStore;

  @observable
  searchedUser: SearchedUser | null = null;

  @observable
  searchSuccess: boolean | null = null;

  @observable
  userAccountbooks: UserAccountbook[] = [];

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  searchUser = async (email: string): Promise<void> => {
    const user = await socialService.searchUser(email);
    runInAction(() => {
      if (user) {
        this.searchedUser = user;
        this.searchSuccess = true;
      } else {
        this.searchedUser = null;
        this.searchSuccess = false;
      }
    });
  };

  @action
  findUsers = async (accountbookId: number): Promise<void> => {
    this.userAccountbooks = await socialService.findUsers(accountbookId);
    runInAction(() => {
      this.userAccountbooks?.sort((userAccountbook1, userAccountbook2) => {
        return userAccountbook2.authority - userAccountbook1.authority;
      });
      console.log(this.userAccountbooks);
    });
  };
}
