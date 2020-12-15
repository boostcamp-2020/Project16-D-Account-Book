import Account from '../../types/account';

export const getDateString = (date: string, time: string): string => {
  const [month, day] = getMonthDay(date);
  const [hour, minute] = getHourMinute(time);
  const currentTime = new Date();
  currentTime.setMonth(month - 1);
  currentTime.setDate(day);
  currentTime.setHours(hour);
  currentTime.setMinutes(minute);
  return currentTime.toISOString().replace(/Z/g, '');
};

const getMonthDay = (date: string): [month: number, day: number] => {
  const stringMonthDay = date.split('/');
  return [parseInt(stringMonthDay[0]), parseInt(stringMonthDay[1])];
};

const getHourMinute = (time: string): [hour: number, minute: number] => {
  const stringHourMinute = time.split(':');
  return [parseInt(stringHourMinute[0]), parseInt(stringHourMinute[1])];
};

export const findAccountByName = (name: string, accounts: Account[]): Account | undefined => {
  return accounts.find((account) => account.name.startsWith(name));
};
