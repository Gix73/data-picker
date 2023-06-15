import { type ISettings } from "../../types/types";
import { DefaultCalendar } from "./DefaultCalendar";
import { WeekCalendar } from "./WeekCalendar";

export class SettingsDecorator {
  setCalendarSettings(settings: ISettings): DefaultCalendar {
    const {
      weekStart,
      withTodo,
      minDate,
      maxDate,
      showWeekends,
      type,
      startDate,
      endDate,
      holidays,
    } = settings;
    const calendar = new DefaultCalendar();

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

    if (startDate) {
      calendar.startDate = startDate;
    } else {
      calendar.startDate = null;
    }

    if (endDate) {
      calendar.endDate = endDate;
    } else {
      calendar.endDate = null;
    }

    if (showWeekends) {
      calendar.showWeekends = true;
    } else {
      calendar.showWeekends = false;
    }

    if (holidays) {
      calendar.holidays = holidays;
    }

    if (type === "week") {
      WeekCalendar(calendar);
    }

    return calendar;
  }
}
