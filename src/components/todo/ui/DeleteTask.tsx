import { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { deleteTaskItem } from "../../../slices/todoSlice";
import { useEditValue } from "../../../helpers/useEditValue";

type DeleteTaskType = {
  onClose?: () => void;
  id: number;
};

const DeleteTask: FunctionComponent<DeleteTaskType> = ({ onClose, id }) => {
  const { newTodo } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-32 h-[43px] flex flex-col py-0 pr-0 pl-2 box-border items-start justify-center max-w-full max-h-full overflow-auto">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-sm font-medium font-inter text-indianred text-left inline-block"
        onClick={() => dispatch(deleteTaskItem(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteTask;
