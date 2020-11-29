import DateStore, { dateStore } from '../../store/dateStore';

interface Store {
  dateStore: DateStore;
}

// TODO: store 생성 시 이곳에서 return 부분에 추가하면 됩니다! ex) return { dataStore, accountbookStore, xxxStore }
const useStore = (): Store => {
  return { dateStore };
};

export default useStore;
