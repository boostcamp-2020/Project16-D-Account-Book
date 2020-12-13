import instance from '../api/axios';
import Accountbook from '../types/accountbook';

const accountbookAPIAddress = {
  getAccountbooks: '/api/accountbooks',
  deleteAccountbook: '/api/accountbooks',
};

export default {
  getAccountbooks: async (): Promise<Accountbook[]> => {
    const response = await instance.get(`${accountbookAPIAddress.getAccountbooks}`);
    return response.data;
  },
  deleteAccountbook: async (accountbookId: number): Promise<void> => {
    await instance.delete(`${accountbookAPIAddress.deleteAccountbook}/${accountbookId}`);
  },
};
