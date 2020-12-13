import instance from '../api/axios';
import Accountbook from '../types/accountbook';

const accountbookAPIAddress = {
  getAccountbooks: '/api/accountbooks',
  updateAccountbook: '/api/accountbooks',
  deleteAccountbook: '/api/accountbooks',
};

export default {
  getAccountbooks: async (): Promise<Accountbook[]> => {
    const response = await instance.get(`${accountbookAPIAddress.getAccountbooks}`);
    return response.data;
  },
  updateAccountbook: async (accountbookId: number): Promise<void> => {
    try {
      const response = await instance.patch(`${accountbookAPIAddress.updateAccountbook}/${accountbookId}`);
      return response.data;
    } catch {
      throw new Error('수정 실패');
    }
  },
  deleteAccountbook: async (accountbookId: number): Promise<void> => {
    await instance.delete(`${accountbookAPIAddress.deleteAccountbook}/${accountbookId}`);
  },
};
