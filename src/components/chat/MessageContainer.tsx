import { FunctionComponent } from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";

type MessageContainerType = {
  onClose?: () => void;
};

const MessageContainer: FunctionComponent<MessageContainerType> = ({
  onClose,
}) => {
  return (
    <div className="relative bg-white w-[734px] h-[737px] flex flex-col items-center justify-center max-w-full max-h-full overflow-auto">
      <div className="flex flex-col items-start justify-start gap-[23px]">
        <ChatHeader />
        <ChatContainer />
        <ChatInput />
      </div>
    </div>
  );
};

export default MessageContainer;
