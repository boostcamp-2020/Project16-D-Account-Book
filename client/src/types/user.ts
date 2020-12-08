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
  email: string;
}

export default User;
