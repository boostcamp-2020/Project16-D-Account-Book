import { ITransaction } from '../../../types/lineChartValue';

export const fullTransaction: ITransaction[] = [
  { date: new Date('2020-11-01'), value: 5000 },
  { date: new Date('2020-11-03'), value: 2000 },
  { date: new Date('2020-11-04'), value: 300 },
  { date: new Date('2020-11-10'), value: 5000 },
  { date: new Date('2020-11-15'), value: 100 },
  { date: new Date('2020-11-19'), value: 3000 },
  { date: new Date('2020-11-20'), value: 0 },
  { date: new Date('2020-11-04'), value: 600 },
  { date: new Date('2020-11-21'), value: 9000 },
  { date: new Date('2020-11-12'), value: 8000 },
  { date: new Date('2020-11-23'), value: 500 },
  { date: new Date('2020-11-27'), value: 9999 },
  { date: new Date('2020-11-30'), value: 800 },
];

export const duplicatedTransaction: ITransaction[] = [
  { date: new Date('2020-11-02'), value: 1000 },
  { date: new Date('2020-11-03'), value: 20000 },
  { date: new Date('2020-11-03'), value: 45000 },
  { date: new Date('2020-11-03'), value: 80000 },
  { date: new Date('2020-11-04'), value: 3000 },
  { date: new Date('2020-11-10'), value: 50000 },
  { date: new Date('2020-11-15'), value: 1000 },
  { date: new Date('2020-11-19'), value: 30000 },
  { date: new Date('2020-11-04'), value: 6000 },
  { date: new Date('2020-11-21'), value: 90000 },
  { date: new Date('2020-11-12'), value: 80000 },
  { date: new Date('2020-11-23'), value: 5000 },
  { date: new Date('2020-11-27'), value: 99990 },
  { date: new Date('2020-11-28'), value: 8000 },
];

export const lackedTransaction: ITransaction[] = [
  { date: new Date('2020-11-01'), value: 1000 },
  { date: new Date('2020-11-03'), value: 20000 },
  { date: new Date('2020-11-03'), value: 45000 },
  { date: new Date('2020-11-03'), value: 80000 },
  { date: new Date('2020-11-04'), value: 3000 },
  { date: new Date('2020-11-10'), value: 50000 },
];

export const oneTransaction: ITransaction[] = [{ date: new Date('2020-11-01'), value: 10000 }];
