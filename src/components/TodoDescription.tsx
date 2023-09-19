import { FunctionComponent } from "react";

const TodoDescription: FunctionComponent = () => {
  return (
    <div className="flex flex-row py-0 pr-0 pl-3 items-start justify-start gap-[24px] text-left text-sm text-gray font-inter">
      <img
        className="relative w-[15px] h-[15px]"
        alt=""
        src="/iconimageedit-24px.svg"
      />
      <div className="relative">Some Description</div>
    </div>
  );
};

export default TodoDescription;
