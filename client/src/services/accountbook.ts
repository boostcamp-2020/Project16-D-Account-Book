import instance from '../api/axios';
import Accountbook, { CeateAccountbookBody } from '../types/accountbook';
import renameKey from '../utils/renameObjectKey';

const accountbookAPIAddress = {
  getAccountbooks: '/api/accountbooks',
  deleteAccountbook: '/api/accountbooks',
  createAccountbook: '/api/accountbooks',
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

  createAccountbook: async ({ title, color, description }: CeateAccountbookBody): Promise<Accountbook> => {
    let { data } = await instance.post(accountbookAPIAddress.createAccountbook, { title, color, description });
    data = renameKey(data, 'accountbook.title', 'title');
    return data;
  },
};
