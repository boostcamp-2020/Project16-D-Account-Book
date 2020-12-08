export interface User {
  userId: number;
  provider: string;
  nickname: string;
  profileUrl: string;
}

export interface SearchedUser {
  id: number;
  nickname: string;
  profileUrl: string;
}

export default User;
