import { FunctionComponent } from "react";
import Messages from "./Messages";

type InboxMessagesType = {
  onClose?: () => void;
};

const InboxMessages: FunctionComponent<InboxMessagesType> = ({ onClose }) => {
  return (
    <div className="relative bg-white w-[734px] h-[737px] flex flex-col items-center justify-start gap-[10px] max-w-full max-h-full overflow-auto text-left text-sm text-goldenrod font-inter">
      <div className="flex flex-col py-5 px-0 items-start justify-start gap-[28px] text-black">
        <input
          className="font-medium font-inter text-xs bg-white rounded-8xs box-border w-[666px] flex flex-row p-2.5 items-center justify-center border-[1px] border-solid border-gray-3"
          placeholder="Search"
          type="text"
        />
        <Messages />
      </div>
    </div>
  );
};

export default InboxMessages;
