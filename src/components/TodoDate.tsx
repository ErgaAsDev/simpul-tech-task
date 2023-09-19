import { FunctionComponent } from "react";

const TodoDate: FunctionComponent = () => {
  return (
    <div className="flex flex-row py-0 pr-0 pl-3 items-center justify-start gap-[18px]">
      <img
        className="relative w-[16.67px] h-[16.67px]"
        alt=""
        src="/iconactionschedule-24px.svg"
      />
      <img className="relative w-[193px] h-10" alt="" src="/group-1711.svg" />
    </div>
  );
};

export default TodoDate;
