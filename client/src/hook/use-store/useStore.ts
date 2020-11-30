import DateStore, { DateContext } from '../../store/dateStore';
import { useContext } from 'react';

interface Store {
  dateStore: DateStore;
}

// TODO: store 생성 시 이곳에서 return 부분에 추가하면 됩니다!
const useStore = (): Store => {
  return { dateStore: useContext(DateContext) };
};

export default useStore;
