import datePeriod from '../../constants/datePeriod';

export const dateOptions = [
  {
    label: datePeriod.ALL,
    value: datePeriod.ALL,
    checked: false,
  },
  {
    label: datePeriod.LAST_ONE_WEEK,
    value: datePeriod.LAST_ONE_WEEK,
    checked: false,
  },
  {
    label: datePeriod.LAST_ONE_MONTH,
    value: datePeriod.LAST_ONE_MONTH,
    checked: false,
  },
  {
    label: datePeriod.LAST_THREE_MONTH,
    value: datePeriod.LAST_THREE_MONTH,
    checked: false,
  },
  {
    label: datePeriod.LAST_SIX_MONTH,
    value: datePeriod.LAST_SIX_MONTH,
    checked: false,
  },
  {
    label: datePeriod.LAST_ONE_YEAR,
    value: datePeriod.LAST_ONE_YEAR,
    checked: false,
  },
  {
    label: datePeriod.USER_SETTING,
    value: datePeriod.USER_SETTING,
    checked: false,
  },
];

export const accountOptions = [
  {
    label: '삼성카드',
    value: '삼성카드',
    checked: true,
  },
  {
    label: '국민카드',
    value: '국민카드',
    checked: true,
  },
  {
    label: '농협카드',
    value: '농협카드',
    checked: true,
  },
  {
    label: '우리카드',
    value: '우리카드',
    checked: true,
  },
  {
    label: '신한카드',
    value: '신한카드',
    checked: true,
  },
];

export const incomeCategoryOptions = [
  {
    label: '타행이체',
    value: '타행이체',
    checked: true,
  },
  {
    label: '중고판매',
    value: '중고판매',
    checked: true,
  },
  {
    label: '급여',
    value: '급여',
    checked: true,
  },
  {
    label: '용돈',
    value: '용돈',
    checked: true,
  },
  {
    label: '사업수입',
    value: '사업수입',
    checked: true,
  },
  {
    label: '금융수입',
    value: '금융수윕',
    checked: true,
  },
];
