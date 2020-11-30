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
