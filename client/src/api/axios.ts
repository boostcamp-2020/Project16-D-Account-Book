import axios from 'axios';

const instance = axios.create({
  baseURL: '127.0.0.1:5000',
});

instance.interceptors.request.use(
  (config) => {
    console.log(config.baseURL);
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    console.error('sdfsdf');
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/';
    return Promise.reject(error);
  },
);

export default instance;
