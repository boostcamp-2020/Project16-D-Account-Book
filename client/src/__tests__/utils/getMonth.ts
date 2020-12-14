import { getFirstDateOfNextMonth, getFirstDateOfPreviousMonth } from '../../utils/date';

describe('getXDateOfMonth 테스트', () => {
  test('현재 객체의 이전달의 첫번째 요일을 가진 Date객체가 반환 되는가', () => {
    const currentDate = new Date();
    const beforeDate = getFirstDateOfPreviousMonth(currentDate);
    expect(currentDate.getMonth()).toBe((beforeDate.getMonth() + 1) % 12);
    expect(beforeDate.getDate()).toBe(1);
  });
  test('현재 객체의 다음달의 첫번째 요일을 가진 Date 객체가 반환 되는가?', () => {
    const currentDate = new Date();
    const nextDate = getFirstDateOfNextMonth(currentDate);
    expect(currentDate.getMonth()).toBe((nextDate.getMonth() + 11) % 12);
    expect(nextDate.getDate()).toBe(1);
  });
});
