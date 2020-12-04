import Account from '../types/account';
import instance from '../api/axios';
import axios, { AxiosResponse } from 'axios';
const accountAPIAddress = {
  getAccounts: '/api/accounts',
};

interface AxiosResponse2 {
  data: Account[];
}

axios.get('');

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
