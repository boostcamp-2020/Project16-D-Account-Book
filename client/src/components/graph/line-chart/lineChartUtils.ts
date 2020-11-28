import { transaction } from 'mobx';
import { ITransaction } from '../../../types/lineChartValue';

export enum ValueUnit {
  TUCK = '(천억)',
  UCK = '(억)',
  MAN = '(만)',
  WON = '(원)',
}

const StringToMoney = {
  [ValueUnit.TUCK]: 100_000_000_000,
  [ValueUnit.UCK]: 100_000_000,
  [ValueUnit.MAN]: 10_000,
  [ValueUnit.WON]: 1,
};

export const getUnit = (value: number): ValueUnit => {
  if (value >= 100_000_000_000) {
    return ValueUnit.TUCK;
  }

  if (value >= 100_000_000) {
    return ValueUnit.UCK;
  }

  if (value >= 10_000) {
    return ValueUnit.MAN;
  }

  return ValueUnit.WON;
};

export const createXAxis = (value: number, unit: ValueUnit): number[] => {
  value = value / StringToMoney[unit];
  const xAxisInterval = 4;
  const ans: number[] = [];
  const gap = value / xAxisInterval;
  for (let i = 0; i <= xAxisInterval; i++) {
    ans.push(Math.round(i * gap * 10) / 10);
  }
  return ans;
};

export const valueFitUnit = (value: number, unit: ValueUnit): number => {
  return Math.round((value * 100) / StringToMoney[unit]) / 100;
};

const gapBetweenDays = (start: Date, end: Date, xWidth: number): number => {
  const daysBetween = end.getDate() - start.getDate() === 0 ? 1 : end.getDate() - start.getDate();
  return xWidth / daysBetween;
};

export const createYAxis = (start: Date, end: Date, xWidth: number): { position: number; date: number }[] => {
  if (end === undefined) {
    end = start;
  }

  const ans: { position: number; date: number }[] = [];
  const gap = gapBetweenDays(start, end, xWidth);
  for (let i = start.getDate(); i <= end.getDate(); i++) {
    ans.push({
      position: gap * (i - start.getDate()),
      date: i,
    });
  }
  return ans;
};

export const createDotPosition = (
  highestValue: number,
  start: Date,
  end: Date,
  xWidth: number,
  yHeight: number,
  chartGap: number,
  today: ITransaction,
): [number, number] => {
  const gap = gapBetweenDays(start, end, xWidth - chartGap);
  const datePosition = today.date.getDate() - start.getDate();
  return [gap * datePosition + chartGap, yHeight - (today.value / highestValue) * (yHeight - chartGap)];
};

export const createPath = (): string => {
  return '안녕ㅎ';
};

const immutableTransaction = (transactions: ITransaction[]): ITransaction[] => {
  return transactions.map((transaction) => ({ ...transaction }));
};

export const gatherByDate = (transactions: ITransaction[]): ITransaction[] => {
  const ans: ITransaction[] = [];
  const map = new Map<number, number>();
  transactions.forEach((transaction) => {
    const timeValue = transaction.date.valueOf();
    if (!map.has(timeValue)) {
      map.set(timeValue, transaction.value);
    } else {
      const value = map.get(timeValue);
      map.set(timeValue, (value as number) + transaction.value);
    }
  });

  map.forEach((value, key) => {
    ans.push({
      date: new Date(key),
      value,
    });
  });

  return sortTransactionByDate(ans);
};

export const sortTransactionByValue = (transactions: ITransaction[]): ITransaction[] => {
  const immutable = immutableTransaction(transactions);
  return immutable.sort((a: ITransaction, b: ITransaction): number => {
    return a.value - b.value;
  });
};

export const sortTransactionByDate = (transactions: ITransaction[]): ITransaction[] => {
  const immutable = immutableTransaction(transactions);
  return immutable.sort((a: ITransaction, b: ITransaction): number => {
    return a.date.valueOf() - b.date.valueOf();
  });
};
