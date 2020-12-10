import instance from '../api/axios';

const authAPIAddress = {
  logout: '/api/oauth/logout',
  getCurrentUser: '/api/auth/current',
};

export default {
  logout: async (): Promise<number> => {
    const response = await instance.get(authAPIAddress.logout);
    return response.status;
  },

  getCurrentUser: async (): Promise<any> => {
    const response = await instance.get(authAPIAddress.getCurrentUser);
    return response.data;
  },
};
