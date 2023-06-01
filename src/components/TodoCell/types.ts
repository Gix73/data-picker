export interface TodoCellProps {
  todo: { id: number; value: string; isChecked: boolean };
  onCheck: (todoId: number) => void;
  onDelete: (todoId: number) => void;
}
