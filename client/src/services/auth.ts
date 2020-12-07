import User from '../types/user';
import instance from '../api/axios';

const authAPIAddress = {
  naverLogin: '/api/oauth/login/naver',
  kakaoLogin: '/api/oauth/login/kakao',
  logout: '/api/ouath/logout',
};

export default {
  naverLogin: async (): Promise<User> => {
    const response = await instance.get(authAPIAddress.naverLogin);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('로그인 실패');
    }
  },

  kakaoLogin: async (): Promise<User> => {
    const response = await instance.get(authAPIAddress.kakaoLogin);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('로그인 실패');
    }
  },

  logout: async (): Promise<number> => {
    const response = await instance.get(authAPIAddress.logout);
    return response.status;
  },
};
