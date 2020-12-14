export interface ITransactionForm {
  classify: boolean; // true이면 수입 , false이면 지출
  price: number | string;
  categories: string | undefined;
  accounts: string | undefined;
  content: string;
  date: string;
  memo: string;
}

export interface ITransactionFormChange {
  classify?: {
    income: () => void;
    expenditure: () => void;
  };
  price?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  categories: (change: string) => void;
  accounts: (change: string) => void;
  content?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  date?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  memo?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export enum FormActionType {
  CLASSIFY_CHANGE,
  PRICE_CHANGE,
  CATEGORIES_CHANGE,
  ACCOUNTS_CHANGE,
  CONTENT_CHANGE,
  DATE_CHANGE,
  MEMO_CHANGE,
}

interface CLASSIFY_CHANGE_ACTION {
  data: boolean;
  type: FormActionType.CLASSIFY_CHANGE;
}

interface PRICE_CHANGE_ACTION {
  data: number | string;
  type: FormActionType.PRICE_CHANGE;
}

interface CATEGORIES_CHANGE {
  data: string;
  type: FormActionType.CATEGORIES_CHANGE;
}

interface ACCOUNTS_CHANGE_ACTION {
  data: string;
  type: FormActionType.ACCOUNTS_CHANGE;
}

interface CONTENT_CHANGE_ACTION {
  data: string;
  type: FormActionType.CONTENT_CHANGE;
}

interface DATE_CHANGE_ACTION {
  data: string;
  type: FormActionType.DATE_CHANGE;
}

interface MEMO_CHANGE_ACTION {
  data: string;
  type: FormActionType.MEMO_CHANGE;
}

export type FormChangeAction =
  | CLASSIFY_CHANGE_ACTION
  | PRICE_CHANGE_ACTION
  | CATEGORIES_CHANGE
  | ACCOUNTS_CHANGE_ACTION
  | CONTENT_CHANGE_ACTION
  | DATE_CHANGE_ACTION
  | MEMO_CHANGE_ACTION;

export interface MMSType {
  transactionType: string;
  isDeposit: boolean;
  cardname: string;
  amount: number;
  date: string;
  time: string;
}
