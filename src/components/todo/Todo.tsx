import TodoHeader from "./TodoHeader";
import TodoItems from "./TodoItems";
import { TodoProps } from "../../types/todoTypes";

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <TodoHeader {...props} />
        {props.itemOpen && <TodoItems {...props} />}
      </div>
      <img
        className="relative w-[671px] h-px"
        alt=""
        src="/vector-8-stroke.svg"
      />
    </div>
  );
};

export default Todo;
