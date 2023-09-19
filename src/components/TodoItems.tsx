import { FunctionComponent } from "react";
import TodoDate from "./TodoDate";
import TodoDescription from "./TodoDescription";
import TodoSticker from "./TodoSticker";

const TodoItems: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col py-0 pr-0 pl-10 items-start justify-start gap-[12px] text-left text-sm text-gray font-inter">
      <TodoDate />
      <TodoDescription />
      <TodoSticker />
    </div>
  );
};

export default TodoItems;
