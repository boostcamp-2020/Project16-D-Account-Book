import { SearchedUser, UserAccountbook } from '../types/user';
import instance from '../api/axios';

const socialAPIAddress = {
  searchUser: '/api/social',
  findUsers: '/api/social/users',
};

export default {
  searchUser: async (email: string): Promise<SearchedUser> => {
    const response = await instance.get(socialAPIAddress.searchUser, {
      params: {
        user_email: email,
      },
    });
    return response.data;
  },

  findUsers: async (accountbookId: number): Promise<UserAccountbook[]> => {
    const response = await instance.get(socialAPIAddress.findUsers, {
      params: {
        accountbook_id: accountbookId,
      },
    });
    return response.data;
  },
};
