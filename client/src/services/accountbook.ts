import instance from '../api/axios';
import Accountbook from '../types/accountbook';
import renameKey from '../utils/renameObjectKey';

const accountbookAPIAddress = {
  getAccountbooks: '/api/accountbooks',
  deleteAccountbook: '/api/accountbooks',
};

export default {
  getAccountbooks: async (): Promise<Accountbook[]> => {
    let { data } = await instance.get(`${accountbookAPIAddress.getAccountbooks}`);
    data = data.map((item) => {
      return renameKey(item, 'accountbook.title', 'title');
    });
    return data;
  },
  deleteAccountbook: async (accountbookId: number): Promise<void> => {
    await instance.delete(`${accountbookAPIAddress.deleteAccountbook}/${accountbookId}`);
  },
};
