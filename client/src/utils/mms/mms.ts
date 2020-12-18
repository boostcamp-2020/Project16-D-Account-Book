import Account from '../../types/account';

export const getDateString = (date: string, time: string): string => {
  const [month, day] = getMonthDay(date);
  const [hour, minute] = getHourMinute(time);
  const tempDate = new Date(70, 1, 1, 0, 0);
  const response = getISOString(tempDate, month, day, hour, minute);
  return response;
};

const getNowYear = () => {
  const now = new Date();
  console.log(now.getFullYear());
  return now.getFullYear();
};

const getMonthDay = (date: string): [month: number, day: number] => {
  const stringMonthDay = date.split('/');
  return [parseInt(stringMonthDay[0]), parseInt(stringMonthDay[1])];
};

const getHourMinute = (time: string): [hour: number, minute: number] => {
  const stringHourMinute = time.split(':');
  return [parseInt(stringHourMinute[0]), parseInt(stringHourMinute[1])];
};

const getISOString = (date, month, day, hour, minute) => {
  date.setFullYear(getNowYear());
  date.setMonth(month - 1);
  date.setDate(day);
  date.setHours(hour);
  date.setMinutes(minute);
  return date.toISOString();
};

export const findAccountByName = (name: string, accounts: Account[]): Account | undefined => {
  return accounts.find((account) => account.name.startsWith(name));
};

export const correctionCardName = (cardName: string): string => {
  if (['kb', 'KB'].includes(cardName)) {
    return '국민';
  } else if (['nh', 'NH'].includes(cardName)) {
    return '농협';
  }
  return cardName;
};
