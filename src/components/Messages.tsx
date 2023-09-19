import { FunctionComponent, useState, useCallback } from "react";
import MessageContainer from "./MessageContainer";
import PortalPopup from "./PortalPopup";
import GroupChatIcon from "./GroupChatIcon";
import ChatInformation from "./ChatInformation";

const Messages: FunctionComponent = () => {
  const [isMessageContainerPopupOpen, setMessageContainerPopupOpen] =
    useState(false);

  const openMessageContainerPopup = useCallback(() => {
    setMessageContainerPopupOpen(true);
  }, []);

  const closeMessageContainerPopup = useCallback(() => {
    setMessageContainerPopupOpen(false);
  }, []);

  return (
    <>
      <div className="flex flex-col items-start justify-start gap-[28px] text-left text-sm text-dodgerblue font-inter">
        <a
          className="[text-decoration:none] flex flex-row items-start justify-start gap-[17px] cursor-pointer text-[inherit]"
          onClick={openMessageContainerPopup}
        >
          <GroupChatIcon />
          <ChatInformation />
        </a>
        <img
          className="relative w-[666px] h-px"
          alt=""
          src="/vector-7-stroke.svg"
        />
      </div>
      {isMessageContainerPopupOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeMessageContainerPopup}
        >
          <MessageContainer onClose={closeMessageContainerPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Messages;
