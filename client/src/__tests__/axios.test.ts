import axios from '../api/axios';

describe('axios 테스트', () => {
  test('get 요청', async () => {
    const data = await axios.get('/test');
    console.log(data);
  });
});
