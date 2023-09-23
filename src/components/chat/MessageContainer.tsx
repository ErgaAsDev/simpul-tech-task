import { FunctionComponent } from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";
import { ChatTypes } from "../../types/chatTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface MessageProps extends ChatTypes {
  onClose: () => void;
}

const MessageContainer: FunctionComponent<MessageProps> = (props) => {
  const { replyMessageOpen, repliedMessageOpen } = useSelector(
    (state: RootState) => state.chat,
  );
  console.log(replyMessageOpen, repliedMessageOpen);

  return (
    <div className="flex flex-col items-start justify-start gap-[23px]">
      <ChatHeader {...props} />
      <ChatContainer {...props} />
      <ChatInput {...props} />
    </div>
  );
};

export default MessageContainer;
