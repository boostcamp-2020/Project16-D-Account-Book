import React, { useReducer } from 'react';
import { Options } from '../../types/dropdownOptions';
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

const defaultState: ITransactionForm = {
  classify: true,
  price: '',
  categories: undefined,
  accounts: undefined,
  content: '',
  date: '',
  memo: '',
};

const UseTransactionForm = (
  initial: ITransactionForm = defaultState,
): [ITransactionForm, ITransactionFormChange, React.Dispatch<FormChangeAction>] => {
  const [state, dispatch] = useReducer(formReducer, initial);
  const changes: ITransactionFormChange = {
    classify: {
      income: () => {
        dispatch({
          type: FormActionType.CLASSIFY_CHANGE,
          data: true,
        });
      },
      expenditure: () => {
        dispatch({
          type: FormActionType.CLASSIFY_CHANGE,
          data: false,
        });
      },
    },
    price: (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const number = parseInt(e.target.value);
        if (isNaN(number)) {
          dispatch({
            type: FormActionType.PRICE_CHANGE,
            data: '',
          });
          return;
        }

        dispatch({
          type: FormActionType.PRICE_CHANGE,
          data: number,
        });
      } catch (e) {
        throw new Error('숫자만 들어와야해요.');
      }
    },
    categories: (change: string) => {
      dispatch({
        type: FormActionType.CATEGORIES_CHANGE,
        data: change,
      });
    },
    accounts: (change: string) => {
      dispatch({
        type: FormActionType.ACCOUNTS_CHANGE,
        data: change,
      });
    },
    content: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: FormActionType.CONTENT_CHANGE,
        data: e.target.value,
      });
    },
    date: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: FormActionType.DATE_CHANGE,
        data: e.target.value,
      });
    },
    memo: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: FormActionType.MEMO_CHANGE,
        data: e.target.value,
      });
    },
  };
  return [state, changes, dispatch];
};

export default UseTransactionForm;
