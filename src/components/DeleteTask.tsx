import { FunctionComponent } from "react";

type DeleteTaskType = {
  onClose?: () => void;
};

const DeleteTask: FunctionComponent<DeleteTaskType> = ({ onClose }) => {
  return (
    <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-32 h-[43px] flex flex-col py-0 pr-0 pl-2 box-border items-start justify-center max-w-full max-h-full overflow-auto">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-sm font-medium font-inter text-indianred text-left inline-block"
        onClick={onClose}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteTask;
