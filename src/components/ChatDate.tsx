import { FunctionComponent } from "react";

const ChatDate: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-center gap-[27px]">
      <img
        className="relative w-[217px] h-0.5"
        alt=""
        src="/vector-14-stroke.svg"
      />
      <img
        className="relative w-[144.09px] h-[14.57px]"
        alt=""
        src="/today-june-09-2021.svg"
      />
      <img className="relative w-60 h-px" alt="" src="/vector-15-stroke.svg" />
    </div>
  );
};

export default ChatDate;
