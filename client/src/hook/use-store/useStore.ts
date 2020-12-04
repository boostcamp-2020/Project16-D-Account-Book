import RootStore, { RootContext } from '../../store/RootStore';
import { useContext } from 'react';

interface Store {
  rootStore: RootStore;
}

// TODO: store 생성 시 이곳에서 return 부분에 추가하면 됩니다!
const useStore = (): Store => {
  return { rootStore: useContext(RootContext) };
};

export default useStore;
