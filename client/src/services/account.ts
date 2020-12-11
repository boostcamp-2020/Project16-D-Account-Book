import Account, { AccountRequest } from '../types/account';
import instance from '../api/axios';

const accountAPIAddress = {
  getAccounts: '/api/accounts',
  createAccount: '/api/accounts',
  deleteAccount: '/api/accounts',
  updateAccount: '/api/accounts',
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
    const response = await instance.post(accountAPIAddress.createAccount, account);
    return response.data;
  },
  deleteAccount: async (accountId: number): Promise<number> => {
    try {
      await instance.delete(accountAPIAddress.deleteAccount + `/${accountId}`);
      return accountId;
    } catch {
      throw new Error('삭제 실패');
    }
  },
  updateAccount: async (account: AccountRequest, accountId: number): Promise<Account> => {
    try {
      const response = await instance.patch(accountAPIAddress.updateAccount + `/${accountId}`, account);
      return response.data;
    } catch {
      throw new Error('수정 실패');
    }
  },
};
