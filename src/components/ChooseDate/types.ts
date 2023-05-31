export interface ChooseDateProps {
  handleChange: (newDate: Date) => void;
  date: string;
  minDate?: Date;
  maxDate?: Date;
}
