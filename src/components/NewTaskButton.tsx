import { FunctionComponent } from "react";

const NewTaskButton: FunctionComponent = () => {
  return (
    <button className="cursor-pointer [border:none] py-2 px-4 bg-dodgerblue rounded-8xs h-10 flex flex-row box-border items-center justify-center">
      <b className="relative text-sm font-inter text-white text-left">
        New Tasks
      </b>
    </button>
  );
};

export default NewTaskButton;
