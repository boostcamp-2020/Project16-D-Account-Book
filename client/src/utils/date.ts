// 윤년인지 판단해주는 함수
export const isLeapYear = (year: number): boolean => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

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
