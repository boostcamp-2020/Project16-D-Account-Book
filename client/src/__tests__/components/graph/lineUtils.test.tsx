import { fullTransaction, duplicatedTransaction } from '../../../__dummy-data__/components/graph/dummyTransaction';
import {
  sortTransactionByDate,
  sortTransactionByValue,
  ValueUnit,
  getUnit,
  createXAxis,
  gatherByDate,
} from '../../../components/graph/line-chart/lineChartUtils';

describe('Line Chart Util 테스트', () => {
  test('date를 기준으로 트랜잭션을 오름차 정렬한다.', () => {
    const data = fullTransaction;
    const sortedData = sortTransactionByDate(data);
    expect(sortedData[0].date.valueOf()).toBe(new Date('2020-11-01').valueOf());
    expect(sortedData[sortedData.length - 1].date.valueOf()).toBe(new Date('2020-11-30').valueOf());
  });
  test('value를 기준으로 트랜잭션을 오름차 정렬한다.', () => {
    const data = fullTransaction;
    const sortedData = sortTransactionByValue(data);
    expect(sortedData[0].value).toBe(0);
    expect(sortedData[sortedData.length - 1].value).toBe(9_999);
  });
  test('date가 같은 트랜잭션들이 잘 합쳐야한다.', () => {
    const ans = gatherByDate(duplicatedTransaction);
    expect(ans[1].value).toBe(145_000);
  });
});

describe('Line Chart Value Object 테스트', () => {
  test('가격이 10000원 미만이라면 unit원 (원)이 나온다.', () => {
    const money = 1_000;
    expect(getUnit(money)).toBe(ValueUnit.WON);
  });
  test('가격이 천억 미만 , 1억 이상 이라면 (억) 이 나온다.', () => {
    const money = 1_000_000_000;
    expect(getUnit(money)).toBe(ValueUnit.UCK);
  });
  test('가격이 1억 미만 만원 이상이라면 (만)이 나온다.', () => {
    const money = 50_000;
    expect(getUnit(money)).toBe(ValueUnit.MAN);
  });
});

describe('Line Chart X Axis 만들기 테스트', () => {
  test('총 5개의 Axis가 그려져야한다.', () => {
    const MAX = 8;
    const array = createXAxis(MAX, ValueUnit.WON);
    expect(array.length).toBe(5);
  });
  test('구간은 5개이며 첫 시작은 항상 0이고 마지막은 가장 큰 기준값으로 그려진다.', () => {
    const MAX = 8;
    const array = createXAxis(MAX, ValueUnit.WON);
    expect(array[0]).toBe(0);
    expect(array[4]).toBe(8);
  });
  test('수는 유닛을 기준으로 나온다.', () => {
    const MAX = 12000;
    const array = createXAxis(MAX, ValueUnit.MAN);
    expect(array[0]).toBe(0);
    expect(array[1]).toBeCloseTo(0.3);
    expect(array[4]).toBeCloseTo(1.2);
  });
});
