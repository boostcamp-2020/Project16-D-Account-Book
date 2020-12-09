export const ALL = '전체';
export const LAST_ONE_WEEK = '최근 1주일';
export const LAST_ONE_MONTH = '최근 1개월';
export const LAST_THREE_MONTH = '최근 3개월';
export const LAST_SIX_MONTH = '최근 6개월';
export const LAST_ONE_YEAR = '최근 1년';
export const USER_SETTING = '기간 설정';

const datePeriod = {
  ALL,
  LAST_ONE_WEEK,
  LAST_ONE_MONTH,
  LAST_THREE_MONTH,
  LAST_SIX_MONTH,
  LAST_ONE_YEAR,
  USER_SETTING,
};

export const datePeriodNumber = {
  [ALL]: {
    year: 0,
    day: 0,
    month: 0,
  },
  [LAST_ONE_WEEK]: {
    year: 0,
    day: 7,
    month: 0,
  },
  [LAST_ONE_MONTH]: {
    year: 0,
    day: 0,
    month: 1,
  },
  [LAST_THREE_MONTH]: {
    year: 0,
    day: 0,
    month: 3,
  },
  [LAST_SIX_MONTH]: {
    year: 0,
    day: 0,
    month: 6,
  },
  [LAST_ONE_YEAR]: {
    year: 1,
    day: 0,
    month: 0,
  },
};

export default datePeriod;
