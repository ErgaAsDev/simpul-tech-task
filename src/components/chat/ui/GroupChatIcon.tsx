import { FunctionComponent } from "react";
import { ChatTypes } from "../../../types/chatTypes";

const GroupChatIcon: FunctionComponent<ChatTypes> = ({ name }) => {
  return (
    <div className="relative w-[50px] h-[50px] bg-[#2F80ED] rounded-[50%] text-white flex items-center justify-center">
      {name.charAt(0)}
    </div>
  );
};

export default GroupChatIcon;
