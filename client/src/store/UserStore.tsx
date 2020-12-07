import { observable, action, makeObservable } from 'mobx';
import RootStore from './RootStore';
import User from '../types/user';

export default class UserStore {
  rootStore: RootStore;
  @observable userId: null | number;
  @observable provider: string;
  @observable nickname: string;
  @observable profileUrl: string;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.userId = null;
    this.provider = '';
    this.nickname = '';
    this.profileUrl = '';
    this.rootStore = rootStore;
  }

  @action
  login = (user: User): void => {
    this.userId = user.userId;
    this.provider = user.provider;
    this.nickname = user.nickname;
    this.profileUrl = user.profileUrl;
  };

  @action
  logout = (): void => {
    this.userId = null;
    this.provider = '';
    this.nickname = '';
    this.profileUrl = '';
  };
}
