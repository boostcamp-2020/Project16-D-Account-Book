import { observable, action, makeObservable } from 'mobx';
import RootStore from './RootStore';
import User, { UserAuthorType } from '../types/user';
import authService from '../services/auth';

export default class UserStore {
  rootStore: RootStore;

  @observable
  userId: null | number;

  @observable
  provider: string;

  @observable
  nickname: string;

  @observable
  profileUrl: string;

  @observable
  email: string;

  //현재 선택한 가계부의 admin 인가?
  // true: 어드민, false: 일반유저, null: 가계부의 구성원이 아님
  @observable
  accountAuthorList: UserAuthorType[] | null;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.userId = null;
    this.provider = '';
    this.nickname = '';
    this.profileUrl = '';
    this.email = '';
    this.accountAuthorList = null;
    this.rootStore = rootStore;
  }

  @action
  updateUser = (user: User): void => {
    this.userId = user.id;
    this.provider = user.provider;
    this.nickname = user.nickname;
    this.profileUrl = user.profileUrl;
    this.email = user.email;
    this.accountAuthorList = user.userAccountbooks;
  };

  @action
  deleteUser = (): void => {
    this.userId = null;
    this.provider = '';
    this.nickname = '';
    this.profileUrl = '';
    this.accountAuthorList = null;
  };

  getAuthority = async (): Promise<void> => {
    try {
      const user = await authService.getCurrentUser();
      this.updateUser(user);
    } catch (e) {
      window.location.href = '/login';
    }
  };

  @action
  changeAuthority = (accountbookId: number, authority: boolean): void => {
    this.accountAuthorList?.forEach((accounts) => {
      if (accounts !== null && accounts.accountbookId === accountbookId) {
        accounts.authority = authority;
      }
    });
  };

  isUser = (accountbookId: number): boolean => {
    const flag = this.accountAuthorList?.some((accounts) => accounts.accountbookId === accountbookId);
    if (flag === undefined) {
      return false;
    }

    return flag;
  };

  isAdmin = (accountbookId: number): boolean => {
    const flag = this.accountAuthorList?.some(
      (accounts) => accounts.accountbookId === accountbookId && accounts.authority,
    );

    if (flag === undefined) {
      return false;
    }

    return flag;
  };

  isUserAdmin = (accountbookId: number): boolean => {
    return this.isUser(accountbookId) || this.isAdmin(accountbookId);
  };

  @action
  deleteAuthor = (accountbookId: number): void => {
    this.accountAuthorList = (this.rootStore.userStore.accountAuthorList as UserAuthorType[]).filter(
      (author) => author.accountbookId !== accountbookId,
    );
  };
}
