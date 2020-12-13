import { useParams } from 'react-router-dom';

interface ParamTypes {
  id: string;
}

const useGetParam = (): number => {
  try {
    const { id } = useParams<ParamTypes>();
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      throw new Error('id params은 항상 숫자여야합니다.');
    }

    return numberId;
  } catch (e) {
    throw new Error('id params은 항상 숫자여야합니다.');
  }
};

export default useGetParam;
