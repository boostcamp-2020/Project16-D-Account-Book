export interface User {
  id: number;
  provider: string;
  nickname: string;
  profileUrl: string;
  userAccountbooks: UserAuthorType[];
}

export interface UserAuthorType {
  authority: boolean;
  accountbookId: number;
}

export default User;
