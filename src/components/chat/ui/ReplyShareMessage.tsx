import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { replyChatOpen } from "../../../slices/chatSlice";

type ReplyShareMessageType = {
  onClose?: () => void;
  id: number;
  repliedText: string;
};

const ReplyShareMessage: FunctionComponent<ReplyShareMessageType> = ({
  onClose,
  id,
  repliedText,
}) => {
  const { replyMessageOpen } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  function handleReplyMessage() {
    onClose?.();
    dispatch(replyChatOpen(id));
  }

  console.log(replyMessageOpen);

  return (
    <div className="relative rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[126px] flex flex-col py-3 px-0 box-border items-start justify-start max-w-full max-h-full overflow-auto text-left text-sm text-dodgerblue font-inter">
      <div className="self-stretch flex flex-col py-0 px-2 items-start justify-start gap-[13px]">
        <div className="relative cursor-pointer" onClick={handleReplyMessage}>
          Reply
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/line-104-stroke1.svg"
        />
        <div className="relative">Share</div>
      </div>
    </div>
  );
};

export default ReplyShareMessage;
