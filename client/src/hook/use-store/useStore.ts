import DateStore, { dateStore } from '../../store/dateStore';

const useStore = (): { dateStore: DateStore } => {
  return { dateStore };
};

export default useStore;
