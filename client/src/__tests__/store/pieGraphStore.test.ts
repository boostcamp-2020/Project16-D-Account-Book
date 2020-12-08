import datePeriod from '../../constants/datePeriod';
import PieGraphPageStore from '../../store/PieGraphPageStore';
import RootStore from '../../store/RootStore';
import { dateOptions } from '../../__dummy-data__/store/formFilterStore';

describe('PieGraphStore Test', () => {
  let container: PieGraphPageStore;
  beforeEach(() => {
    const rootStore = new RootStore();
    const { pieGraphPageStore } = rootStore;
    container = pieGraphPageStore;
  });
  test('초기 선택된 값은 한달이다.', () => {
    const now = new Date();
    const prev = new Date();
    prev.setMonth(now.getMonth() - 1);
    expect(container.selectedDate).toBe(datePeriod.LAST_ONE_MONTH);
    expect(container.endDate.toDateString()).toBe(now.toDateString());
    expect(container.startDate.toDateString()).toBe(prev.toDateString());
  });
  describe('selectedDate가 변경되면 사이드 이펙트로 startDate도 변경된다.', () => {
    test('selectedDate가 LAST_ONE_WEEK으로 변경되었다.', () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK);
      const now = new Date();
      const prev = new Date();
      prev.setDate(now.getDate() - 7);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('selectedDate가 LAST_THREE_MONTH로 변경되면 월단위로 startDate도 변경된다.', () => {
      container.changeSelectedDate(datePeriod.LAST_THREE_MONTH);
      const now = new Date();
      const prev = new Date();
      prev.setMonth(now.getMonth() - 3);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('selectedDate가 LAST_ONE_YEAR으로 변경되면 년단위로 변경된다.', () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_YEAR);
      const now = new Date();
      const prev = new Date();
      prev.setFullYear(now.getFullYear() - 1);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('selectedDate가 ALL으로 변경되면 endDate는 현재 시점이고, startDate는 1970년이다.', () => {
      container.changeSelectedDate(datePeriod.ALL);
      const now = new Date();
      const prev = new Date(0);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
  });
  describe('endDate,startDate 를 변경할때에는 항상 selectedDate를 기준으로 움직인다.', () => {
    test('LAST_ONE_WEEK에서 이전일로 이동', () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK);
      const current = new Date();
      const now = new Date();
      const prev = new Date();
      now.setDate(current.getDate() - 7);
      prev.setDate(now.getDate() - 7);
      container.moveToPrev();
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('LAST_ONE_WEEK에서 다음일로 이동', () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK);
      const now = new Date();
      const prev = new Date();
      prev.setDate(now.getDate() - 7);
      container.moveToPrev();
      container.moveToNext();
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('현재 시점을 초과하여 이동할 수 없다.', () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK);
      const now = new Date();
      const prev = new Date();
      prev.setDate(now.getDate() - 7);
      container.moveToPrev();
      container.moveToNext();
      container.moveToNext();
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
  });
});
