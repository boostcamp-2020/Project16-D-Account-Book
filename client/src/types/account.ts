export interface Account {
  id: number;
  name: string;
  color: string;
}

export interface AccountRequest {
  accountbookId: number;
  name: string;
  color: string;
}

export interface SingleAccount {
  id: number;
  name: string;
  color: string;
  shadow?: boolean;
  preview?: string;
  onClick?: () => void;
}

export default Account;
