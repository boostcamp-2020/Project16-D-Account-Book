import RootStore from '../../store/RootStore';
import { createIncomeRequestBody } from '../../__dummy-data__/api/transaction/createIncomeExpenditure';
describe('Transaction Store 테스트', () => {
  let container: RootStore;
  beforeEach(() => {
    container = new RootStore();
  });
  test('새로운 income을 생성하는 요청을 API 보내 성공할경우 income을 트랜잭션 리스트에 추가한다.', async () => {
    const transactionStore = container.transactionStore;
    const beforeLength = transactionStore.transactions.length;
    await transactionStore.createIncome(createIncomeRequestBody);
    const afterLength = transactionStore.transactions.length;
    expect(beforeLength + 1).toBe(afterLength);
  });
  test('새로운 income을 생성했지만 일자가 현재 지정된 일과 다르다면 추가하지 않아야 한다.', async () => {
    const transactionStore = container.transactionStore;
    container.dateStore.startDate = new Date('2020-10-02');
    const beforeLength = transactionStore.transactions.length;
    await transactionStore.createIncome(createIncomeRequestBody);
    const afterLength = transactionStore.transactions.length;
    expect(beforeLength).toBe(afterLength);
  });
});
