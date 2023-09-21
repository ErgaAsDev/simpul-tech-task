import { FunctionComponent } from "react";

const ChatInformation: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[8px] text-left text-sm text-dodgerblue font-inter">
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <b className="relative">109220-Naturalization</b>
        <div className="relative text-xs font-medium text-dimgray">
          January 1, 2021 19:20
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[4px] text-dimgray">
        <div className="relative font-medium">Cameron Phillips :</div>
        <div className="relative text-xs">Please Check this out !</div>
      </div>
    </div>
  );
};

export default ChatInformation;
