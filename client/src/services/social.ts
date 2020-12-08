import { SearchedUser, UserAccountbook, AddUserBody, DeleteUserBody } from '../types/social';
import instance from '../api/axios';

const socialAPIAddress = {
  searchUser: '/api/social',
  findUsers: '/api/social/users',
  addUser: 'api/social',
  deleteUser: 'api/social',
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

  addUser: async ({ accountbookId, userId }: AddUserBody): Promise<UserAccountbook> => {
    const response = await instance.post(socialAPIAddress.addUser, { accountbookId, userId });
    return response.data;
  },

  deleteUser: async ({ accountbookId, userId }: DeleteUserBody): Promise<void> => {
    const response = await instance.delete(socialAPIAddress.deleteUser, {
      params: { accountbookId, userId },
    });
    return response.data;
  },
};
