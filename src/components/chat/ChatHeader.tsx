import { FunctionComponent } from "react";
import { ChatTypes } from "../../types/chatTypes";

interface MessageProps extends ChatTypes {
  onClose: () => void;
}

const ChatHeader: FunctionComponent<MessageProps> = ({
  onClose,
  name,
  company,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
      <div className="self-stretch flex flex-row items-center justify-start gap-3">
        <img
          className="relative w-6 h-6 cursor-pointer"
          alt=""
          src="/group-1607.svg"
          onClick={onClose}
        />
        <div className="flex-1 flex flex-col ">
          <h3 className="relative text-blue-700 mb-0">{name}</h3>
          {/* <img
              className="relative w-[71.35px] h-[10.81px]"
              alt=""
              src="/3-participants.svg"
            /> */}
          <h4>Online 4 Minutes Ago</h4>
        </div>
      </div>

      <div className="self-stretch flex border-t border-[#828282] border-solid"></div>
    </div>
  );
};

export default ChatHeader;
