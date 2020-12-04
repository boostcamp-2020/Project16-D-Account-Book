import CategoryStore from '../../store/CategoryStore';
import RootStore from '../../store/RootStore';
import dummyExpenditure from '../../__dummy-data__/api/category/getExpenditure';
import dummyIncome from '../../__dummy-data__/api/category/getIncome';
describe('카테고리 스토어 테스트', () => {
  let container: CategoryStore;
  beforeEach(() => {
    const root = new RootStore();
    container = root.categoryStore;
  });
  test('server을 통해 income category data를 받을 수 있다.', async () => {
    const id = 2;
    await container.updateIncomeCategories(id);
    const result = container.incomeCategories;
    result.forEach((item) => {
      expect(dummyIncome.sort()).toContainEqual(item);
    });
  });
  test('server을 통해 expenditure category data를 받을 수 있다.', async () => {
    const id = 1;
    await container.updateExpenditureCategories(id);
    const result = container.expenditureCategories;
    result.forEach((item) => {
      expect(dummyExpenditure.sort()).toContainEqual(item);
    });
  });
});
