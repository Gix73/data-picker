export interface DayPropsI {
  date: Date;
  textColor: string;
  bgColor: string;
  borderRadius: string;
  selectedDate: Date;
  displayedDate: number;
  width?: string;
  height?: string;
  minDate?: Date;
  maxDate?: Date;
  showWeekends?: boolean;
  onClick: (newDate: Date) => void;
}
