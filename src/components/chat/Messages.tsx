import { FunctionComponent, useState, useCallback, useEffect } from "react";
import MessageContainer from "./MessageContainer";
import PortalPopup from "../PortalPopup";
import GroupChatIcon from "./ui/GroupChatIcon";
import ChatInformation from "./ChatInformation";
import { handleCloseMessage, handleOpenMessage } from "../../slices/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { ChatTypes } from "../../types/chatTypes";

const Messages: FunctionComponent<ChatTypes> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { isMessageOpen } = useSelector((state: RootState) => state.chat);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleOpenMessageClick = (userId: number) => {
    setSelectedUserId(userId);
    dispatch(handleOpenMessage());
  };

  const handleCloseMessageClick = () => {
    setSelectedUserId(null);
    dispatch(handleCloseMessage());
  };
  return (
    <>
      <div
        className={` ${
          isMessageOpen && "hidden"
        } relative flex flex-col items-center justify-between gap-[12px] text-left text-sm text-dodgerblue font-inter`}
      >
        <div className="flex flex-col gap-[20px]">
          <a
            className="[text-decoration:none] flex flex-row items-start justify-start gap-[17px] cursor-pointer text-[inherit]"
            onClick={() => handleOpenMessageClick(props.id)}
          >
            <GroupChatIcon {...props} />
            <ChatInformation {...props} />
          </a>
          <img
            className="relative w-[666px] h-px"
            alt=""
            src="/vector-7-stroke.svg"
          />
        </div>
      </div>
      {isMessageOpen && selectedUserId === props.id && (
        <MessageContainer onClose={handleCloseMessageClick} {...props} />
      )}
    </>
  );
};

export default Messages;
