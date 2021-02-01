export interface Data {
  name: string;
  createDate: string;
  endDate: string;
  isFinish: boolean;
  priority: number;
  _id: string;
}

export interface ItemProps {
  item: Data;
  onTodoChange: any;
  deleteTodo: any;
}
