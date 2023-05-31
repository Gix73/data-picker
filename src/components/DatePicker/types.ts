export interface DatePickerProps {
  type?: "month";
  minDate?: Date;
  maxDate?: Date;
  showWeekends?: boolean;
  weekStart?: "su" | "mo";
}
