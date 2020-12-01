import React, { useReducer } from 'react';
import { Options } from '../../types/options';
import {
  ITransactionForm,
  ITransactionFormChange,
  FormActionType,
  FormChangeAction,
} from '../../types/TransactionForm';

export function formReducer(state: ITransactionForm, action: FormChangeAction): ITransactionForm {
  switch (action.type) {
    case FormActionType.CLASSIFY_CHANGE: {
      return {
        ...state,
        classify: action.data,
      };
    }
    case FormActionType.PRICE_CHANGE: {
      return {
        ...state,
        price: action.data,
      };
    }
    case FormActionType.CATEGORIES_CHANGE: {
      return {
        ...state,
        categories: action.data,
      };
    }
    case FormActionType.ACCOUNTS_CHANGE: {
      return {
        ...state,
        accounts: action.data,
      };
    }
    case FormActionType.CONTENT_CHANGE: {
      return {
        ...state,
        content: action.data,
      };
    }
    case FormActionType.DATE_CHANGE: {
      return {
        ...state,
        date: action.data,
      };
    }
    case FormActionType.MEMO_CHANGE: {
      return {
        ...state,
        memo: action.data,
      };
    }
    default: {
      throw new Error('form Reducer 에 맞는 형식이 아닙니다.');
    }
  }
}

const UseTransactionForm = () => {
  const [calssify, setClassify] = useState<boolean>(false);
  const [price, setPrice] = useState<number>();
  const [categories, setCategories] = useState<number>();
  const [accounts, setAccounts] = useState<number>();
  const [content, useContent] = useState<string>();
  const [date, useDate] = useState<string>();
  const [memo, useMemo] = useState<string>();
};

export default UseTransactionForm;
