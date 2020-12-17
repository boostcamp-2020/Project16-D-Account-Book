const request = require('supertest');
const app = require('../../app');

console.log(app);

describe('basic route tests', () => {
  beforeAll(async () => {
    console.log('Jest starting!');
  });
  // close the server after each test
  afterAll(() => {
    console.log('server closed!');
  });

  test('get home route GET /', async () => {
    const response = await request(app.callback()).get('localhost:5000/api/transactions');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('Hello World!');
  });
});
