import { type ISettings } from "../../types/types";
import { DefaultCalendar } from "./DefaultCalendar";
import { WeekCalendar } from "./WeekCalendar";

export class SettingsDecorator {
  setCalendarSettings(settings: ISettings): DefaultCalendar {
    const { weekStart, withTodo, minDate, maxDate, showWeekends, type } =
      settings;
    const calendar = new DefaultCalendar();

    if (type === "week") {
      const weekCalc = new WeekCalendar();
      calendar.getNext = weekCalc.getNext;
      calendar.getPrevious = weekCalc.getPrevious;
      calendar.getDateArr = weekCalc.getDateArr;
    }

    if (weekStart === "mo") {
      calendar.weekStart = "mo";
    } else {
      calendar.weekStart = "su";
    }

    if (withTodo === true) {
      calendar.withTodo = true;
    } else {
      calendar.withTodo = false;
    }

    if (minDate) {
      calendar.minDate = minDate;
    } else {
      calendar.minDate = null;
    }

    if (maxDate) {
      calendar.maxDate = maxDate;
    } else {
      calendar.maxDate = null;
    }

    if (showWeekends) {
      calendar.showWeekends = true;
    } else {
      calendar.showWeekends = false;
    }

    return calendar;
  }
}
