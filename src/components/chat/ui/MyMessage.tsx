import { FunctionComponent, useState, useRef, useCallback } from "react";
import EditDeleteMessage from "./EditDeleteMessage";
import PortalPopup from "../../PortalPopup";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface MyChatTypes {
  id: number;
  name: string;
  message: string;
  time: string;
  isReplied: boolean;
  company: { catchPhrase: string };
}

const MyMessage: FunctionComponent<MyChatTypes> = ({
  id,
  name,
  message,
  time,
  isReplied,
  company,
}) => {
  const editDeleteButtonRef = useRef<HTMLButtonElement>(null);
  const [isEditDeleteMessagePopupOpen, setEditDeleteMessagePopupOpen] =
    useState(false);
  const { repliedMessageOpen } = useSelector((state: RootState) => state.chat);
  const openEditDeleteMessagePopup = useCallback(() => {
    setEditDeleteMessagePopupOpen(true);
  }, []);

  const closeEditDeleteMessagePopup = useCallback(() => {
    setEditDeleteMessagePopupOpen(false);
  }, []);
  console.log(company);

  return (
    <>
      <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-left text-sm text-darkorchid font-inter">
        <div className="relative font-medium">You</div>
        {isReplied && (
          <div className="bg-[#F2F2F2] border border-solid border-[#E0E0E0] py-2 px-3 rounded text-[#4F4F4F]">
            {company.catchPhrase}
          </div>
        )}
        <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.67px] h-[6px]"
            ref={editDeleteButtonRef}
            onClick={openEditDeleteMessagePopup}
          >
            <img
              className="absolute top-[0px] left-[0px] w-[10.67px] h-[2.67px]"
              alt=""
              src="/iconnavigationmore-horiz-24px.svg"
            />
          </button>
          <div className="rounded-8xs bg-lavender-200 flex flex-col p-2.5 items-start justify-start gap-[10px]">
            <div className="relative">{message}</div>
            <div className="relative">{time}</div>
          </div>
        </div>
      </div>
      {isEditDeleteMessagePopupOpen && (
        <PortalPopup
          placement="Bottom right"
          relativeLayerRef={editDeleteButtonRef}
          onOutsideClick={closeEditDeleteMessagePopup}
        >
          <EditDeleteMessage onClose={closeEditDeleteMessagePopup} id={id} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyMessage;
