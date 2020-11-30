import DateStore, { DateContext } from '../../store/DateStore';
import TransactionStore, { TransactionContext } from '../../store/TransactionStore';
import { useContext } from 'react';

interface Store {
  dateStore: DateStore;
  transactionStore: TransactionStore;
}

// TODO: store 생성 시 이곳에서 return 부분에 추가하면 됩니다!
const useStore = (): Store => {
  return {
    dateStore: useContext(DateContext),
    transactionStore: useContext(TransactionContext),
  };
};

export default useStore;
