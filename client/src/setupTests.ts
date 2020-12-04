// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { getExpenditureCategoriesHandler } from './__dummy-data__/api/category/getExpenditure';
import { getIncomeCategoriesHandler } from './__dummy-data__/api/category/getIncome';
import { getAccountsHandler } from './__dummy-data__/api/account/getAccounts';

const handlers = [getExpenditureCategoriesHandler, getIncomeCategoriesHandler, getAccountsHandler];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export default server;
