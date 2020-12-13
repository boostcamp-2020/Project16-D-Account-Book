import instance from '../api/axios';

const accountbookAPIAddress = {
  deleteAccountbook: '/api/accountbooks',
};

export default {
  deleteAccountbook: async (accountbookId: number): Promise<void> => {
    await instance.delete(`${accountbookAPIAddress.deleteAccountbook}/${accountbookId}`);
  },
};
