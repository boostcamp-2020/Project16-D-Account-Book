import { observable, action, makeObservable } from 'mobx';
import RootStore from './RootStore';
import User from '../types/user';
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

  //현재 선택한 가계부의 admin 인가?
  @observable
  isAdmin: boolean;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.userId = null;
    this.provider = '';
    this.nickname = '';
    this.profileUrl = '';
    this.isAdmin = false;
    this.rootStore = rootStore;
  }

  @action
  updateUser = (user: User): void => {
    this.userId = user.id;
    this.provider = user.provider;
    this.nickname = user.nickname;
    this.profileUrl = user.profileUrl;
  };

  @action
  deleteUser = (): void => {
    this.userId = null;
    this.provider = '';
    this.nickname = '';
    this.profileUrl = '';
  };

  checkAuth = async (): Promise<void> => {
    const user = await authService.getCurrentUser();
    this.updateUser(user);
  };

  checkAuthority = async (accountbookId: number): Promise<void> => {
    const { authority } = await authService.getAuthority(accountbookId);
    this.setIsAdmin(authority);
  };

  @action
  setIsAdmin = (isAdmin: boolean): void => {
    this.isAdmin = isAdmin;
  };
}
