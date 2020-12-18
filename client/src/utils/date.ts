import datePeriod from '../constants/datePeriod';
/*
TODO :
윤년인지 판단해주는 함수
월변경 컴포넌트에서 필요할 줄 알고 만들었는데, 생각해보니 사용되지 않네요..
혹시나 다른 기능에서 필요할까봐 삭제하지 않았습니다.
*/
export const isLeapYear = (year: number): boolean => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

/*
TODO :
월의 말일인지 판단해주는 함수입니다.
월변경 컴포넌트에서 필요할 줄 알고 만들었는데, 생각해보니 사용되지 않네요..
혹시나 다른 기능에서 필요할까봐 삭제하지 않았습니다.
*/
export const isEndOfMonth = (year: number, month: number, day: number): boolean => {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month != 2) {
    return day == monthDays[month - 1];
  }

  if (isLeapYear(year)) {
    return day == 29;
  }

  return day == 28;
};

/*
TODO :
월의 말일을 리턴해주는 함수입니다.
월변경 컴포넌트에서 필요할 줄 알고 만들었는데, 생각해보니 사용되지 않네요..
혹시나 다른 기능에서 필요할까봐 삭제하지 않았습니다.
*/
export const getEndOfMonth = (year: number, month: number): number => {
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month != 2) {
    return monthDays[month - 1];
  }

  if (isLeapYear(year)) {
    return 29;
  }

  return 28;
};

export const isEndOfYear = (month: number): boolean => {
  return month == 12;
};

export const isStartOfYear = (month: number): boolean => {
  return month == 1;
};

// 다음달 1일 0시0분 시간을 반환하는 함수
export const getFirstDateOfNextMonth = (currentDate: Date): Date => {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;

  if (isEndOfYear(month)) {
    year = year + 1;
    month = 1;
  } else {
    month = month + 1;
  }

  const date = new Date(`${year}.${month}.1`);
  return date;
};

// 이전달 1일 0시0분 시간을 반환하는 함수
export const getFirstDateOfPreviousMonth = (currentDate: Date): Date => {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;

  if (isStartOfYear(month)) {
    year = year - 1;
    month = 12;
  } else {
    month = month - 1;
  }

  const date = new Date(`${year}.${month}.1`);
  return date;
};

export const getFormattedDate = ({ date, format }: { date: Date; format: string }): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${format}${month}${format}${day}`;
};

export const getFormattedDateForCSV = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
};

export const getDatePeriod = (startDate: Date, endDate: Date): string => {
  if (isAllPeriod(startDate, endDate)) {
    return datePeriod.ALL;
  }

  if (isLastOneYear(startDate, endDate)) {
    return datePeriod.LAST_ONE_YEAR;
  }

  if (isLastOneSixMonth(startDate, endDate)) {
    return datePeriod.LAST_SIX_MONTH;
  }

  if (isLastThreeMonth(startDate, endDate)) {
    return datePeriod.LAST_THREE_MONTH;
  }

  if (isLastOneMonth(startDate, endDate)) {
    return datePeriod.LAST_ONE_MONTH;
  }

  return datePeriod.LAST_ONE_WEEK;
};

export const isAllPeriod = (startDate: Date, endDate: Date): boolean => {
  const tempDate = new Date(startDate);
  if (tempDate.setFullYear(tempDate.getFullYear() + 1) + 1000 * 60 * 60 * 24 < endDate.getTime()) {
    return true;
  }
  return false;
};

export const isLastOneYear = (startDate: Date, endDate: Date): boolean => {
  const tempDate = new Date(startDate);
  if (tempDate.setMonth(tempDate.getMonth() + 6) + 1000 * 60 * 60 * 24 < endDate.getTime()) {
    return true;
  }
  return false;
};

export const isLastOneSixMonth = (startDate: Date, endDate: Date): boolean => {
  const tempDate = new Date(startDate);
  if (tempDate.setMonth(tempDate.getMonth() + 3) + 1000 * 60 * 60 * 24 < endDate.getTime()) {
    return true;
  }
  return false;
};

export const isLastThreeMonth = (startDate: Date, endDate: Date): boolean => {
  const tempDate = new Date(startDate);
  if (tempDate.setMonth(tempDate.getMonth() + 1) + 1000 * 60 * 60 * 24 < endDate.getTime()) {
    return true;
  }
  return false;
};

export const isLastOneMonth = (startDate: Date, endDate: Date): boolean => {
  const tempDate = new Date(startDate);
  if (tempDate.setDate(tempDate.getDate() + 7) < endDate.getTime()) {
    return true;
  }
  return false;
};
