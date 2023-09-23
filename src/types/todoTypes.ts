export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  taskDone?: boolean;
  itemOpen?: boolean;
  deleteTaskPopup?: boolean;
  taskOpen?: boolean;
  dateTask?: string;
  hasStickers?: any[];
}
