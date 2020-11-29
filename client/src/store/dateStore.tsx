import { observable, action, makeObservable } from 'mobx';
import { getFirstDateOfPreviousMonth, getFirstDateOfNextMonth } from '../utils/date';
import React, { createContext } from 'react';

export default class DateStore {
  @observable startDate: Date;
  @observable endDate: Date;

  constructor() {
    makeObservable(this);
    const currentDate = new Date();
    this.startDate = new Date(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-1`);
    this.startDate.setHours(0, 0, 0, 0);
    this.endDate = getFirstDateOfNextMonth(this.startDate);
  }

  @action
  moveToNextMonth(): void {
    this.startDate = getFirstDateOfNextMonth(this.startDate);
    this.endDate = getFirstDateOfNextMonth(this.startDate);
  }

  @action
  moveToPreviousMonth(): void {
    this.startDate = getFirstDateOfPreviousMonth(this.startDate);
    this.endDate = getFirstDateOfNextMonth(this.startDate);
  }
}

export const DateContext = createContext<DateStore>(new DateStore());

export const DateProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <DateContext.Provider value={new DateStore()}>{children}</DateContext.Provider>;
};
