export interface ToDoProps {
  onShow: () => void;
  date: Date;
}

export interface ToDoState {
  id: number;
  value: string;
  isChecked: boolean;
}
