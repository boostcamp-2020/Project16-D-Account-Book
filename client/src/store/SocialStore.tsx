import { observable, action, makeObservable } from 'mobx';
import { SearchedUser } from '../types/user';
import RootStore from './RootStore';
import socialService from '../services/social';

export default class DateStore {
  rootStore: RootStore;

  @observable
  searchedUser: SearchedUser | null = null;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  searchUser = async (email: string): Promise<void> => {
    const user = await socialService.searchUser(email);
    console.log(user);
  };
}
