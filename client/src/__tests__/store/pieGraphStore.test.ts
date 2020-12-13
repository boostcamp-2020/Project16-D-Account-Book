import { waitFor } from '@testing-library/react';
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
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  test('초기 선택된 값은 한달이다.', () => {
    const now = new Date();
    const prev = new Date();
    prev.setMonth(now.getMonth() - 1);
    now.setDate(now.getDate() + 1);
    expect(container.selectedDate).toBe(datePeriod.LAST_ONE_MONTH);
    expect(container.endDate.toDateString()).toBe(now.toDateString());
    expect(container.startDate.toDateString()).toBe(prev.toDateString());
  });
  describe('selectedDate가 변경되면 사이드 이펙트로 startDate도 변경된다.', () => {
    test('selectedDate가 LAST_ONE_WEEK으로 변경되었다.', async () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK, 1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(1));
      jest.runAllTimers();
      const now = new Date();
      const prev = new Date();
      now.setDate(now.getDate() + 1);
      prev.setDate(now.getDate() - 8);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('selectedDate가 LAST_THREE_MONTH로 변경되면 월단위로 startDate도 변경된다.', async () => {
      container.changeSelectedDate(datePeriod.LAST_THREE_MONTH, 1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(1));
      jest.runAllTimers();
      const now = new Date();
      const prev = new Date();
      now.setDate(now.getDate() + 1);
      prev.setMonth(now.getMonth() - 3);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('selectedDate가 LAST_ONE_YEAR으로 변경되면 년단위로 변경된다.', async () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_YEAR, 1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(1));
      jest.runAllTimers();
      const now = new Date();
      const prev = new Date();
      now.setDate(now.getDate() + 1);
      prev.setFullYear(now.getFullYear() - 1);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('selectedDate가 ALL으로 변경되면 endDate는 현재 시점이고, startDate는 1970년이다.', async () => {
      container.changeSelectedDate(datePeriod.ALL, 1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(2));
      jest.runAllTimers();
      const now = new Date();
      now.setDate(now.getDate());
      const prev = new Date(0);
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
  });
  describe('endDate,startDate 를 변경할때에는 항상 selectedDate를 기준으로 움직인다.', () => {
    test('LAST_ONE_WEEK에서 이전일로 이동', async () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK, 1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(1));
      jest.runAllTimers();
      const current = new Date();
      const now = new Date();
      const prev = new Date();
      now.setDate(current.getDate() - 7);
      prev.setDate(now.getDate() - 8);
      container.moveToPrev(1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(2));
      jest.runAllTimers();
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
    test('LAST_ONE_WEEK에서 다음일로 이동', async () => {
      container.changeSelectedDate(datePeriod.LAST_ONE_WEEK, 1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(1));
      jest.runAllTimers();
      const now = new Date();
      const prev = new Date();
      now.setDate(now.getDate() + 1);
      prev.setDate(now.getDate() - 8);
      container.moveToPrev(1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(2));
      jest.runAllTimers();
      container.moveToNext(1);
      await waitFor(() => expect(setTimeout).toHaveBeenCalledTimes(3));
      jest.runAllTimers();
      expect(container.endDate.toDateString()).toBe(now.toDateString());
      expect(container.startDate.toDateString()).toBe(prev.toDateString());
    });
  });
});
