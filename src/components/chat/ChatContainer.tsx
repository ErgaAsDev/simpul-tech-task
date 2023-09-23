import { FunctionComponent } from "react";
import MyMessage from "./ui/MyMessage";
import ChatDate from "./ChatDate";
import OtherMessage from "./ui/OtherMessage";
import { ChatTypes } from "../../types/chatTypes";

const ChatContainer: FunctionComponent<ChatTypes> = (props) => {
  return (
    <>
      <div className="self-stretch h-[550.97px] flex flex-col py-0 pr-3 pl-0 box-border items-start justify-start gap-[23px] overflow-x-hidden text-left text-sm text-goldenrod font-inter">
        <OtherMessage {...props} />
        <ChatDate />
        {props.myNewChat &&
          props.myNewChat.map((chat) => (
            <MyMessage key={chat.id} {...chat} company={props.company} />
          ))}
      </div>
    </>
  );
};

export default ChatContainer;
