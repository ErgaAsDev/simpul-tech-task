import { TodoProps } from "../../types/todoTypes";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleValueChange } from "../../slices/todoSlice";
import { RootState } from "../../store";
import { useEditValue } from "../../helpers/useEditValue";

const TodoDescription: React.FC<TodoProps> = ({
  body,
  id,
  taskOpen,
}: TodoProps) => {
  const { isEditing, handleOnKeyDown, handleIconClick } = useEditValue();

  const dispatch = useDispatch();

  function handleChangeValue(e: any) {
    const { value } = e.target;

    dispatch(handleValueChange({ value, id }));
  }

  return (
    <div className="flex flex-row py-0 pr-0 pl-3 items-start justify-start gap-[24px] text-left text-sm text-gray font-inter">
      <img
        className="relative w-[15px] h-[15px] cursor-pointer"
        alt=""
        src="/iconimageedit-24px.svg"
        onClick={handleIconClick}
      />
      {isEditing ? (
        <div>
          <textarea
            className="border border-black rounded"
            value={body}
            onChange={handleChangeValue}
            onKeyDown={handleOnKeyDown}
            rows={4}
            cols={50}
          />
        </div>
      ) : (
        <div className="relative">{body}</div>
      )}
    </div>
  );
};

export default TodoDescription;
