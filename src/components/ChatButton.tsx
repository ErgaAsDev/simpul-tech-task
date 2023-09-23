import { FunctionComponent, useState, useRef, useCallback } from "react";
import Inbox from "./chat/Inbox";
import PortalPopup from "./PortalPopup";
import { useDispatch } from "react-redux";
import { handleCloseMessage } from "../slices/chatSlice";

const ChatButton: FunctionComponent = () => {
  const groupButton1Ref = useRef<HTMLButtonElement>(null);
  const [isInboxMessagesPopupOpen, setInboxMessagesPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const openInboxMessagesPopup = useCallback(() => {
    setInboxMessagesPopupOpen(true);
  }, []);

  const closeInboxMessagesPopup = useCallback(() => {
    setInboxMessagesPopupOpen(false);
    dispatch(handleCloseMessage());
  }, []);

  return (
    <>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px]"
        ref={groupButton1Ref}
        onClick={openInboxMessagesPopup}
      >
        <div
          className={`absolute flex top-[0px] left-[0px] w-[60px] h-[60px] ${
            isInboxMessagesPopupOpen ? "bg-[#8785FF]" : "bg-white"
          } rounded-[50%] items-center justify-center`}
        >
          <img
            src={`${
              isInboxMessagesPopupOpen
                ? "/chat-active-icon.png"
                : "/chat-icon.png"
            }`}
            alt="task"
            className="w-[26px] h-[26px]"
          />
        </div>
      </button>
      {isInboxMessagesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          top={40}
          relativeLayerRef={groupButton1Ref}
          onOutsideClick={closeInboxMessagesPopup}
        >
          <Inbox />
        </PortalPopup>
      )}
    </>
  );
};

export default ChatButton;
