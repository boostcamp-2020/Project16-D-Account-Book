import Account from '../types/account';
import instance from '../api/axios';

const accountAPIAddress = {
  getAccounts: '/api/accounts',
};
export default {
  getAccountsById: async (id: number): Promise<Account[]> => {
    const data = await instance.get<any, Account[]>(accountAPIAddress.getAccounts, {
      params: {
        accountbook_id: id,
      },
    });

    return data;
  },
};
