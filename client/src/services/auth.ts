import instance from '../api/axios';

const authAPIAddress = {
  logout: '/api/oauth/logout',
};

export default {
  logout: async (): Promise<number> => {
    const response = await instance.get(authAPIAddress.logout);
    return response.status;
  },
};
