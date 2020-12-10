import { observable, action, makeObservable, runInAction } from 'mobx';
import { SearchedUser, UserAccountbook, AddUserBody, DeleteUserBody } from '../types/social';
import RootStore from './RootStore';
import socialService from '../services/social';

export default class DateStore {
  rootStore: RootStore;

  @observable
  isLoading = true;

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
      this.userAccountbooks.sort((userAccountbook1, userAccountbook2) => {
        return Number(userAccountbook2.authority) - Number(userAccountbook1.authority);
      });
      this.isLoading = false;
    });
  };

  @action
  addUser = async ({ accountbookId, userId }: AddUserBody): Promise<void> => {
    try {
      const userAccountbook = await socialService.addUser({ accountbookId, userId });
      runInAction(() => {
        this.userAccountbooks.push(userAccountbook);
        this.searchedUser = null;
        this.searchSuccess = null;
      });
    } catch (error) {
      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };

  @action
  deleteUser = async ({ accountbookId, userId }: DeleteUserBody): Promise<void> => {
    await socialService.deleteUser({ accountbookId, userId });
    runInAction(() => {
      this.userAccountbooks = this.userAccountbooks.filter((userAccountbook) => userAccountbook.user.id != userId);
    });
  };

  @action
  giveAdmin = async (userAccountbookId: number, authority: number): Promise<void> => {
    await socialService.giveAdmin(userAccountbookId, authority);
    runInAction(() => {
      this.userAccountbooks = this.userAccountbooks.map((userAccountbook) => {
        userAccountbook.authority = userAccountbook.authority ? false : true;
        return userAccountbook;
      });
      this.userAccountbooks = this.userAccountbooks.map((userAccountbook) => {
        userAccountbook.authority = userAccountbook.id === userAccountbookId ? true : false;
        return userAccountbook;
      });
      this.userAccountbooks.sort((userAccountbook1, userAccountbook2) => {
        return Number(userAccountbook2.authority) - Number(userAccountbook1.authority);
      });
      this.rootStore.userStore.isAdmin = false;
    });
  };
}
