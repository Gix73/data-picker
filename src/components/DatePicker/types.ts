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
  onChange: (value: Date) => void;
}
