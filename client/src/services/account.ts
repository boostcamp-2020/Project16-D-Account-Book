import Account, { AccountRequest } from '../types/account';
import instance from '../api/axios';

const accountAPIAddress = {
  getAccounts: '/api/accounts',
  createAccount: '/api/accounts',
};
export default {
  getAccountsById: async (id: number): Promise<Account[]> => {
    const response = await instance.get(accountAPIAddress.getAccounts, {
      params: {
        accountbook_id: id,
      },
    });

    return response.data;
  },
  createAccount: async (account: AccountRequest): Promise<Account> => {
    return await instance.post(accountAPIAddress.createAccount, account);
  },
};
