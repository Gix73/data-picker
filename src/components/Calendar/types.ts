import { type DatePickerProps } from "../DatePicker/types";

export interface CalendarProps extends DatePickerProps {
  date: Date;
  onChange: (newDate: Date) => void;
}

export interface IDateState {
  current: Date | number | null;
  month: number;
  year: number;
}
