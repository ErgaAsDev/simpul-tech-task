import { FunctionComponent } from "react";
import TodoDate from "./TodoDate";
import TodoDescription from "./TodoDescription";
import TodoSticker from "./TodoSticker";
import { TodoProps } from "../../types/todoTypes";

const TodoItems: React.FC<TodoProps> = (props: TodoProps) => {
  return (
    <div className="self-stretch flex flex-col py-0 pr-0 pl-10 items-start justify-start gap-[12px] text-left text-sm text-gray font-inter">
      <TodoDate {...props} />
      <TodoDescription {...props} />
      <TodoSticker {...props} />
    </div>
  );
};

export default TodoItems;
