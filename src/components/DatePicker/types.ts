export interface DatePickerProps {
  type?: "month" | "week" | "year";
  minDate?: Date;
  maxDate?: Date;
  showWeekends?: boolean;
  weekStart?: "su" | "mo";
  withTodo?: boolean;
  startDate?: Date;
  endDate?: Date;
  title?: string;
  holidays?: Array<{ month: number; day: number }>;
  defaultColor?: string;
  holidayColor?: string;
  onChange: (value: Date) => void;
}
