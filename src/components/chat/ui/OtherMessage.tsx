import { FunctionComponent, useState, useRef, useCallback } from "react";
import ReplyShareMessage from "./ReplyShareMessage";
import PortalPopup from "../../PortalPopup";
import { ChatTypes } from "../../../types/chatTypes";

const OtherMessage: FunctionComponent<ChatTypes> = ({ name, company, id }) => {
  const replyShareButtonRef = useRef<HTMLButtonElement>(null);
  const [isReplyShareMessagePopupOpen, setReplyShareMessagePopupOpen] =
    useState(false);

  const openReplyShareMessagePopup = useCallback(() => {
    setReplyShareMessagePopupOpen(true);
  }, []);

  const closeReplyShareMessagePopup = useCallback(() => {
    setReplyShareMessagePopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-sm text-goldenrod font-inter">
        <div className="relative font-medium">{name}</div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
          <div className="rounded-8xs bg-papayawhip flex flex-col p-2.5 items-start justify-start gap-[10px]">
            <div className="relative">{company.catchPhrase}</div>
            <div className="relative">19:32</div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.67px] h-[6px]"
            ref={replyShareButtonRef}
            onClick={openReplyShareMessagePopup}
          >
            <img
              className="absolute top-[0px] left-[0px] w-[10.67px] h-[2.67px]"
              alt=""
              src="/iconnavigationmore-horiz-24px1.svg"
            />
          </button>
        </div>
      </div>
      {isReplyShareMessagePopupOpen && (
        <PortalPopup
          placement="Bottom left"
          relativeLayerRef={replyShareButtonRef}
          onOutsideClick={closeReplyShareMessagePopup}
        >
          <ReplyShareMessage
            onClose={closeReplyShareMessagePopup}
            id={id}
            repliedText={company.catchPhrase}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default OtherMessage;
