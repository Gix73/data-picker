export interface ChooseDateProps {
  handleChange: (newDate: Date) => void;
  date: string;
  minDate?: Date;
  maxDate?: Date;
  startDate?: Date;
  endDate?: Date;
  handleShow: () => void;
}
