export interface AddUserBody {
  accountbookId: number;
  userId: number;
}

export interface SearchedUser {
  id: number;
  nickname: string;
  profileUrl: string;
  email: string;
}

export interface UserAccountbook {
  id: number;
  authority: number;
  user: SearchedUser;
}
