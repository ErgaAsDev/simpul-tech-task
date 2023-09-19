import { FunctionComponent, useState, useRef, useCallback } from "react";
import EditDeleteMessage from "./EditDeleteMessage";
import PortalPopup from "./PortalPopup";
import ReplyShareMessage from "./ReplyShareMessage";
import MyMessage from "./MyMessage";
import ChatDate from "./ChatDate";
import OtherMessage from "./OtherMessage";

const ChatContainer: FunctionComponent = () => {
  const editDeleteButton1Ref = useRef<HTMLButtonElement>(null);
  const [isEditDeleteMessagePopup1Open, setEditDeleteMessagePopup1Open] =
    useState(false);
  const replyShareButton1Ref = useRef<HTMLButtonElement>(null);
  const [isReplyShareMessagePopup1Open, setReplyShareMessagePopup1Open] =
    useState(false);
  const replyShareButton2Ref = useRef<HTMLButtonElement>(null);
  const [isReplyShareMessagePopup2Open, setReplyShareMessagePopup2Open] =
    useState(false);

  const openEditDeleteMessagePopup1 = useCallback(() => {
    setEditDeleteMessagePopup1Open(true);
  }, []);

  const closeEditDeleteMessagePopup1 = useCallback(() => {
    setEditDeleteMessagePopup1Open(false);
  }, []);

  const openReplyShareMessagePopup1 = useCallback(() => {
    setReplyShareMessagePopup1Open(true);
  }, []);

  const closeReplyShareMessagePopup1 = useCallback(() => {
    setReplyShareMessagePopup1Open(false);
  }, []);

  const openReplyShareMessagePopup2 = useCallback(() => {
    setReplyShareMessagePopup2Open(true);
  }, []);

  const closeReplyShareMessagePopup2 = useCallback(() => {
    setReplyShareMessagePopup2Open(false);
  }, []);

  return (
    <>
      <div className="self-stretch h-[550.97px] flex flex-col py-0 pr-3 pl-0 box-border items-start justify-start gap-[23px] overflow-x-hidden text-left text-sm text-goldenrod font-inter">
        <MyMessage />
        <ChatDate />
        <OtherMessage />
        <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-darkorchid">
          <div className="relative font-medium">You</div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.67px] h-[2.67px]"
              ref={editDeleteButton1Ref}
              onClick={openEditDeleteMessagePopup1}
            >
              <img
                className="absolute top-[0px] left-[0px] w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px2.svg"
              />
            </button>
            <div className="rounded-8xs bg-lavender-200 flex flex-col p-2.5 items-start justify-start gap-[10px]">
              <div className="relative">{`Some messagesSomeasdsad `}</div>
              <div className="relative">19:32</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">Panjul</div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
            <div className="rounded-8xs bg-papayawhip flex flex-col p-2.5 items-start justify-start gap-[10px]">
              <div className="relative">{`Some messagesSomeasdsad `}</div>
              <div className="relative">19:32</div>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.67px] h-[2.67px]"
              ref={replyShareButton1Ref}
              onClick={openReplyShareMessagePopup1}
            >
              <img
                className="absolute top-[0px] left-[0px] w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px1.svg"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[9px]">
          <img
            className="relative w-[250px] h-px"
            alt=""
            src="/vector-14-stroke1.svg"
          />
          <img
            className="relative w-[97.27px] h-[14.46px]"
            alt=""
            src="/new-message.svg"
          />
          <img
            className="relative w-[10.67px] h-[10.67px]"
            alt=""
            src="/iconnavigationarrow-downward-24px.svg"
          />
          <img
            className="relative w-[272px] h-px"
            alt=""
            src="/vector-15-stroke1.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">Panjul</div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
            <div className="rounded-8xs bg-papayawhip flex flex-col p-2.5 items-start justify-start gap-[10px]">
              <div className="relative">{`Some messagesSomeasdsad `}</div>
              <div className="relative">19:32</div>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.67px] h-[2.67px]"
              ref={replyShareButton2Ref}
              onClick={openReplyShareMessagePopup2}
            >
              <img
                className="absolute top-[0px] left-[0px] w-[10.67px] h-[2.67px]"
                alt=""
                src="/iconnavigationmore-horiz-24px3.svg"
              />
            </button>
          </div>
        </div>
      </div>
      {isEditDeleteMessagePopup1Open && (
        <PortalPopup
          placement="Bottom right"
          relativeLayerRef={editDeleteButton1Ref}
          onOutsideClick={closeEditDeleteMessagePopup1}
        >
          <EditDeleteMessage onClose={closeEditDeleteMessagePopup1} />
        </PortalPopup>
      )}
      {isReplyShareMessagePopup1Open && (
        <PortalPopup
          placement="Bottom left"
          relativeLayerRef={replyShareButton1Ref}
          onOutsideClick={closeReplyShareMessagePopup1}
        >
          <ReplyShareMessage onClose={closeReplyShareMessagePopup1} />
        </PortalPopup>
      )}
      {isReplyShareMessagePopup2Open && (
        <PortalPopup
          placement="Bottom left"
          relativeLayerRef={replyShareButton2Ref}
          onOutsideClick={closeReplyShareMessagePopup2}
        >
          <ReplyShareMessage onClose={closeReplyShareMessagePopup2} />
        </PortalPopup>
      )}
    </>
  );
};

export default ChatContainer;
