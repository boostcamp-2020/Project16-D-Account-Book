import { observable, action, makeObservable, runInAction } from 'mobx';
import { SearchedUser } from '../types/user';
import RootStore from './RootStore';
import socialService from '../services/social';

export default class DateStore {
  rootStore: RootStore;

  @observable
  searchedUser: SearchedUser | null = null;

  @observable
  searchSuccess: boolean | null = null;

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
}
