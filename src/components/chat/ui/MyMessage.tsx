import { FunctionComponent, useState, useRef, useCallback } from "react";
import EditDeleteMessage from "./EditDeleteMessage";
import PortalPopup from "../../PortalPopup";

const MyMessage: FunctionComponent = () => {
  const editDeleteButtonRef = useRef<HTMLButtonElement>(null);
  const [isEditDeleteMessagePopupOpen, setEditDeleteMessagePopupOpen] =
    useState(false);

  const openEditDeleteMessagePopup = useCallback(() => {
    setEditDeleteMessagePopupOpen(true);
  }, []);

  const closeEditDeleteMessagePopup = useCallback(() => {
    setEditDeleteMessagePopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-col items-end justify-start gap-[4px] text-left text-sm text-darkorchid font-inter">
        <div className="relative font-medium">You</div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-dimgray">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[10.67px] h-[2.67px]"
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
            <div className="relative">{`Some messagesSomeasdsad `}</div>
            <div className="relative">19:32</div>
          </div>
        </div>
      </div>
      {isEditDeleteMessagePopupOpen && (
        <PortalPopup
          placement="Bottom right"
          relativeLayerRef={editDeleteButtonRef}
          onOutsideClick={closeEditDeleteMessagePopup}
        >
          <EditDeleteMessage onClose={closeEditDeleteMessagePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyMessage;
