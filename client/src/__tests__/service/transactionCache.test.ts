import transactionService, { createGetTransactionQuery } from '../../services/transaction';
import { getFirstDateOfNextMonth, getFirstDateOfPreviousMonth } from '../../utils/date';

describe('Transaction 테스트', () => {
  let accountbookId;
  let startDate;
  let endDate;
  let beforeStartDate;
  let afterEndDate;
  let g;
  beforeEach(() => {
    accountbookId = 1;
    startDate = new Date();
    endDate = getFirstDateOfNextMonth(startDate);
    beforeStartDate = getFirstDateOfPreviousMonth(startDate);
    afterEndDate = getFirstDateOfNextMonth(endDate);
    g = transactionService.getTransactions(accountbookId, startDate, endDate, beforeStartDate, afterEndDate);
  });
  test('현재 요청을 보낸후 이를 세션에 캐싱하였는가', async () => {
    await g.next();
    await g.next();
    const query = createGetTransactionQuery(accountbookId, startDate, endDate);
    const get = window.sessionStorage.getItem(query);
    expect(get).not.toBeNull();
    expect(get).not.toBeUndefined();
  });
  test('요청을 보낸후 이전 날짜를 요청을 세션에 캐싱하였는가', async () => {
    await g.next();
    await g.next();
    const query = createGetTransactionQuery(accountbookId, beforeStartDate, startDate);
    const get = window.sessionStorage.getItem(query);
    expect(get).not.toBeNull();
    expect(get).not.toBeUndefined();
  });
  test('요청을 보낸 후 다음 날짜를 세션에 캐싱 하였는가', async () => {
    await g.next();
    await g.next();
    const query = createGetTransactionQuery(accountbookId, endDate, afterEndDate);
    const get = window.sessionStorage.getItem(query);
    expect(get).not.toBeNull();
    expect(get).not.toBeUndefined();
  });
});
