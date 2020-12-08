import { SearchedUser } from '../types/user';
import instance from '../api/axios';

const socialAPIAddress = {
  searchUser: '/api/social',
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
};
