/* eslint-disable no-param-reassign */
import { type ICalendar } from "../../types/types";
import {
  getCurrentWeekNumber,
  getMonthFirstDay,
  getNumberOfMonthDays,
  zeroPad,
} from "../helpers/calendarHelper";
import { type State } from "./DefaultCalendar";

export const WeekCalendar = (calendar: ICalendar): void => {
  function getPrevious(state: State): State {
    const { month, year, week } = state;
    const monthDays = getNumberOfMonthDays(month, year);

    const amountofWeeks = Math.ceil(monthDays / 7);
    if (week === 0) {
      const prevMonth = month > 1 ? month - 1 : 12;
      const prevMonthYear = month > 1 ? year : year - 1;
      return { month: prevMonth, year: prevMonthYear, week: amountofWeeks - 1 };
    }
    let newWeek;
    if (week !== undefined) {
      newWeek = week - 1;
      return { month, year, week: newWeek };
    }
    const prevMonth = month > 1 ? month - 1 : 12;
    const prevMonthYear = month > 1 ? year : year - 1;
    return { month: prevMonth, year: prevMonthYear };
  }

  calendar.getPrevious = getPrevious;
  function getNext(state: State): State {
    const { month, year, week } = state;
    const monthDays = getNumberOfMonthDays(month, year);
    const amountofWeeks = Math.floor(monthDays / 7);
    if (week >= amountofWeeks) {
      const nextMonth = month < 12 ? month + 1 : 1;
      const nextMonthYear = month < 12 ? year : year + 1;
      return { month: nextMonth, year: nextMonthYear, week: 0 };
    }
    let newWeek;
    if (week !== undefined) {
      newWeek = week + 1;
      return { month, year, week: newWeek };
    }

    const nextMonth = month < 12 ? month + 1 : 1;
    const nextMonthYear = month < 12 ? year : year + 1;
    return { month: nextMonth, year: nextMonthYear };
  }

  calendar.getNext = getNext;
  function getDateArr(state: State): Array<Array<string | number>> {
    const { month, year, date, week } = state;

    const monthDays = getNumberOfMonthDays(month, year);

    const monthFirstDay = getMonthFirstDay(month, year);

    let daysFromPrevMonth: number;
    if (calendar.weekStart === "mo") {
      daysFromPrevMonth = monthFirstDay - 2;
      if (daysFromPrevMonth === -1) {
        if (monthFirstDay === 1) {
          daysFromPrevMonth = 6;
        } else {
          daysFromPrevMonth = 1;
        }
      }
    } else {
      daysFromPrevMonth = monthFirstDay - 1;
    }
    const amountofWeeks = Math.ceil(monthDays / 7);

    const daysFromNextMonth =
      (amountofWeeks + 1) * 7 - (daysFromPrevMonth + monthDays);

    const prevData = calendar.getPrevious({ month, year }) as State;
    const nextData = calendar.getNext({ month, year }) as State;

    const prevMonthDays = getNumberOfMonthDays(prevData.month, prevData.year);

    const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => {
      const day = index + 1 + (prevMonthDays - daysFromPrevMonth);
      return [prevData.year, zeroPad(prevData.month, 2), zeroPad(day, 2)];
    });

    const thisMonthDates = [...new Array(monthDays)].map((n, index) => {
      const day = index + 1;
      return [year, zeroPad(month, 2), zeroPad(day, 2)];
    });

    const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => {
      const day = index + 1;
      return [nextData.year, zeroPad(nextData.month, 2), zeroPad(day, 2)];
    });

    const data = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
    return data.slice(week * 7, week * 7 + 7);
  }

  calendar.getDateArr = getDateArr;

  calendar.getDateInfo = function getDateInfo(date?: Date): State {
    if (!date) {
      date = new Date();
    }
    const info = {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      week: getCurrentWeekNumber(date, date.getMonth(), date.getFullYear()),
    };
    return info;
  };
};
