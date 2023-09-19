import { FunctionComponent } from "react";
import StartButton from "../components/StartButton";

const QuicksInbox: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-row items-center justify-start">
      <img
        className="relative w-[1920px] h-[1080px] z-[0]"
        alt=""
        src="/bkg.svg"
      />
      <div className="my-0 mx-[!important] absolute top-[-1px] right-[0px] h-[1080px] overflow-hidden flex flex-col p-5 box-border items-center justify-end z-[1]">
        <StartButton />
      </div>
    </div>
  );
};

export default QuicksInbox;
