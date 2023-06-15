import { type DatePickerProps } from "../DatePicker/types";

export interface CalendarProps extends DatePickerProps {
  currentDate: Date;
  onChange: (newDate: Date) => void;
}

export interface IDateState {
  current: Date | number | null;
  month: number;
  year: number;
  week?: number;
}
