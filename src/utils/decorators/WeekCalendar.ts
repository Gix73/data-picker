import { CALENDAR_WEEKS } from "../../constants/date";
import { type ICalendar } from "../../types/types";
import {
  getMonthFirstDay,
  getNumberOfMonthDays,
  zeroPad,
} from "../helpers/calendarHelper";
import { type State } from "./DefaultCalendar";

export class WeekCalendar implements ICalendar {
  public weekStart?: "su" | "mo" = "su";

  public withTodo?: boolean = false;

  public minDate?: Date | null = null;

  public maxDate?: Date | null = null;

  public showWeekends?: boolean = true;

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

  public getDateArr({
    month,
    year,
    date,
  }: State): Array<Array<string | number>> {
    // const monthDays = getNumberOfMonthDays(month, year);
    const monthDays = 7;
    const monthFirstDay = getMonthFirstDay(month, year);
    console.log(`month  ${month}`);
    console.log(`mfDay  ${monthFirstDay}`);
    console.log(`numofdays ${monthDays}`);
    console.log(date);

    if (date) {
      const currentWeek = Math.ceil((date.getDate() + monthFirstDay) / 7);
      console.log(`week  ${currentWeek}`);
    }

    let daysFromPrevMonth: number;
    if (this.weekStart === "mo") {
      daysFromPrevMonth = monthFirstDay - 2;
    } else {
      daysFromPrevMonth = monthFirstDay - 1;
    }

    const daysFromNextMonth = 0;
    // CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

    const prevData = this.getPrevious({ month, year });
    const nextData = this.getNext({ month, year });

    // const prevMonthDays = getNumberOfMonthDays(prevData.month, prevData.year);
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
}
