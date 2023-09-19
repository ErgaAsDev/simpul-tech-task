import { FunctionComponent } from "react";

const ChatHeader: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
      <div className="self-stretch flex flex-row items-center justify-start">
        <img className="relative w-6 h-6" alt="" src="/group-1607.svg" />
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col py-0 px-5 items-start justify-start gap-[9px]">
            <img
              className="relative w-[429.03px] h-[15.26px]"
              alt=""
              src="/i589--amarkhil-obaidullah-affirmative-filing-with-zhn.svg"
            />
            <img
              className="relative w-[71.35px] h-[10.81px]"
              alt=""
              src="/3-participants.svg"
            />
          </div>
        </div>
        <img
          className="relative w-3.5 h-3.5"
          alt=""
          src="/iconnavigationclose-24px.svg"
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src="/vector-6-stroke.svg"
      />
    </div>
  );
};

export default ChatHeader;
