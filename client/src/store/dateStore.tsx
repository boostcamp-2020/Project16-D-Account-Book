import { observable, action, makeObservable } from 'mobx';
import { isEndOfYear, isStartOfYear } from '../utils/date';
import React, { createContext } from 'react';

export default class DateStore {
  @observable startDate: Date;
  @observable endDate: Date;

  constructor() {
    makeObservable(this);
    const currentDate = new Date();
    this.startDate = new Date(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-1`);
    this.startDate.setHours(0, 0, 0, 0);
    this.endDate = new Date(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-1`);
    this.endDate.setHours(0, 0, 0, 0);
  }

  @action
  moveToNextMonth(): void {
    let year = this.startDate.getFullYear();
    let month = this.startDate.getMonth() + 1;

    if (isEndOfYear(month)) {
      year = year + 1;
      month = 1;
    } else {
      month = month + 1;
    }

    this.startDate = new Date(`${year}-${month}-1`);
    this.startDate.setHours(0, 0, 0, 0);
  }

  @action
  moveToPreviousMonth(): void {
    let year = this.startDate.getFullYear();
    let month = this.startDate.getMonth() + 1;

    if (isStartOfYear(month)) {
      year = year - 1;
      month = 12;
    } else {
      month = month - 1;
    }

    this.startDate = new Date(`${year}-${month}-1`);
    this.startDate.setHours(0, 0, 0, 0);
  }
}

export const DateContext = createContext<DateStore>(new DateStore());

export const DateProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <DateContext.Provider value={new DateStore()}>{children}</DateContext.Provider>;
};
