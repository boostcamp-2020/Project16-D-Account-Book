import DateStore, { dateStore } from '../../store/dateStore';

interface Store {
  dateStore: DateStore;
}

const useStore = (): Store => {
  return { dateStore };
};

export default useStore;
