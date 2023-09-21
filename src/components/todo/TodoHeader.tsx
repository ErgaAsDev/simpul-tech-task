import { useCallback, useRef } from "react";
import DeleteTask from "./ui/DeleteTask";
import PortalPopup from "../PortalPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteTaskPopup,
  handleTaskDone,
  handleTodoItem,
  handleTitleChange,
  handleOnKeyDown,
} from "../../slices/todoSlice";
import { RootState } from "../../store";
import { TodoProps } from "../../types/todoTypes";
import { useEditValue } from "../../helpers/useEditValue";

const TodoHeader: React.FC<TodoProps> = ({
  title,
  id,
  taskDone,
  itemOpen,
  deleteTaskPopup,
  taskOpen,
}: TodoProps) => {
  const deleteTaskButtonRef = useRef<HTMLButtonElement>(null);

  const { newTaskTitle } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleChangeValue = useCallback((e: any) => {
    const { value } = e.target;

    dispatch(handleTitleChange({ value, id, title }));
  }, []);

  const handlePressEnter = (e: any) => {
    const { key } = e;

    dispatch(handleOnKeyDown({ key, id }));
  };

  return (
    <>
      <div className="self-stretch flex flex-row items-center justify-start gap-[39px] text-left text-sm text-darkslategray font-inter">
        <input
          className="relative box-border w-[18px] h-[18px] border-[2px] border-solid border-gray-3"
          type="checkbox"
          checked={taskDone}
          onChange={useCallback(() => dispatch(handleTaskDone(id)), [])}
        />
        <div className="relative font-semibold">
          {taskOpen ? (
            <div>
              <textarea
                className="border border-black rounded"
                value={title}
                onChange={handleChangeValue}
                onKeyDown={handlePressEnter}
                rows={2}
                cols={30}
              />
            </div>
          ) : taskDone ? (
            <s className="text-[#828282]">{title}</s>
          ) : (
            `${title}`
          )}
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[15px] text-indianred">
          <div className="relative">2 Days Left</div>
          <div className="relative text-dimgray">12/06/2021</div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 [transform:_rotate(180deg)] [transform-origin:0_0]"
            onClick={useCallback(
              () => dispatch(handleTodoItem(id)),
              [dispatch],
            )}
          >
            <img
              className={`absolute h-[30.88%] w-6/12 top-[-65.44%] right-[125%] bottom-[134.56%] left-[-75%] max-w-full overflow-hidden max-h-full ${
                itemOpen ? "" : "rotate-180"
              }`}
              alt=""
              src="/iconnavigationexpand-more-24px.svg"
            />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-3.5 h-[3.5px]"
            ref={deleteTaskButtonRef}
            onClick={useCallback(() => dispatch(handleDeleteTaskPopup(id)), [])}
          >
            <img
              className="absolute top-[0px] left-[0px] w-3.5 h-[3.5px]"
              alt=""
              src="/iconnavigationmore-vert-24px.svg"
            />
          </button>
        </div>
      </div>
      {deleteTaskPopup && (
        <PortalPopup
          placement="Bottom right"
          bottom={8}
          relativeLayerRef={deleteTaskButtonRef}
          onOutsideClick={() => dispatch(handleDeleteTaskPopup(id))}
        >
          <DeleteTask
            onClose={() => dispatch(handleDeleteTaskPopup(id))}
            id={id}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default TodoHeader;
