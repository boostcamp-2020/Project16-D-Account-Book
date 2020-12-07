import AccountStore from '../../store/AccountStore';
import RootStore from '../../store/RootStore';
import dummyAccounts from '../../__dummy-data__/api/account/getAccounts';
describe('계좌(결제수단) 스토어 테스트', () => {
  let container: AccountStore;
  beforeEach(() => {
    const root = new RootStore();
    container = root.accountStore;
  });
  test('server을 통해 account 리스트를 받을 수 있다.', async () => {
    const id = 1;
    await container.updateAccounts(id);
    const result = container.accounts;
    result.forEach((item) => {
      expect(dummyAccounts.sort()).toContainEqual(item);
    });
  });
});
