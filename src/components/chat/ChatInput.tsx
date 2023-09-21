import { FunctionComponent } from "react";

const ChatInput: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-start justify-start gap-[13px]">
      <input
        className="bg-white rounded-8xs box-border w-[580px] h-10 flex flex-row py-2.5 px-4 items-center justify-start border-[1px] border-solid border-gray-3"
        placeholder="Type a new message"
        type="text"
      />
      <button className="cursor-pointer [border:none] py-2 px-4 bg-dodgerblue rounded-8xs w-[76px] h-10 flex flex-row box-border items-center justify-center">
        <img
          className="relative w-[33.97px] h-[12.02px]"
          alt=""
          src="/send.svg"
        />
      </button>
    </div>
  );
};

export default ChatInput;
