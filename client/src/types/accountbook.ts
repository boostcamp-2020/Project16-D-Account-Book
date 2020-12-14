export interface Accountbook {
  id: number;
  title: string;
  color: string;
  description: string;
  accountbookId?: number;
}

export interface CreateAccountbookBody {
  title: string;
  color: string;
  description: string;
}

export default Accountbook;
