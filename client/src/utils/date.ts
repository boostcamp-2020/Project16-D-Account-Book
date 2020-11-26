// 윤년인지 판단해주는 함수
export const isLeapYear = (year: number): boolean => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};
