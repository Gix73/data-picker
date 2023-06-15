/* eslint-disable no-param-reassign */
import { CALENDAR_WEEKS } from "../../constants/date";
import { type ICalendar } from "../../types/types";
import {
  getMonthFirstDay,
  getNumberOfMonthDays,
  zeroPad,
} from "../helpers/calendarHelper";

export interface State {
  month: number;
  year: number;
  week?: number;
  date?: Date;
}

export class DefaultCalendar implements ICalendar {
  public type?: "month" | "week" | "year" = "month";

  public weekStart?: "su" | "mo" = "su";

  public withTodo?: boolean = false;

  public minDate?: Date | null = null;

  public maxDate?: Date | null = null;

  public showWeekends?: boolean = true;

  public startDate?: Date | null = null;

  public endDate?: Date | null = null;

  public holidays?: Array<{ month: number; day: number }> = undefined;

  public getPrevious({ month, year }: State): State {
    const prevMonth = month > 1 ? month - 1 : 12;
    const prevMonthYear = month > 1 ? year : year - 1;
    return { month: prevMonth, year: prevMonthYear };
  }

  public getNext({ month, year }: State): State {
    const nextMonth = month < 12 ? month + 1 : 1;
    const nextMonthYear = month < 12 ? year : year + 1;
    return { month: nextMonth, year: nextMonthYear };
  }

  public getDateArr({ month, year }: State): Array<Array<string | number>> {
    const monthDays = getNumberOfMonthDays(month, year);
    const monthFirstDay = getMonthFirstDay(month, year);
    let daysFromPrevMonth: number;
    if (this.weekStart === "mo") {
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

    const daysFromNextMonth =
      CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

    const prevData = this.getPrevious({ month, year });
    const nextData = this.getNext({ month, year });

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

    return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
  }

  public getDateInfo(date?: Date): State {
    if (!date) {
      date = new Date();
    }
    const info = {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
    return info;
  }
}
