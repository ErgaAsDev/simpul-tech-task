import { FunctionComponent, useState, useRef, useCallback } from "react";
import Stickers from "./Stickers";
import PortalPopup from "./PortalPopup";

const TodoSticker: FunctionComponent = () => {
  const stickerRef = useRef<HTMLButtonElement>(null);
  const [isStickersPopupOpen, setStickersPopupOpen] = useState(false);

  const openStickersPopup = useCallback(() => {
    setStickersPopupOpen(true);
  }, []);

  const closeStickersPopup = useCallback(() => {
    setStickersPopupOpen(false);
  }, []);

  return (
    <>
      <button
        className="cursor-pointer [border:none] p-0 bg-whitesmoke self-stretch flex flex-col items-start justify-center"
        ref={stickerRef}
        onClick={openStickersPopup}
      >
        <div className="flex flex-row py-2 pr-0 pl-3 items-start justify-start gap-[19px]">
          <img
            className="relative w-[14.17px] h-[18.33px]"
            alt=""
            src="/iconactionbookmarks-24px.svg"
          />
          <i className="relative text-base inline-block font-lato text-gray-3 text-left w-24 shrink-0">
            Add Stickers
          </i>
        </div>
      </button>
      {isStickersPopupOpen && (
        <PortalPopup
          placement="Bottom left"
          relativeLayerRef={stickerRef}
          onOutsideClick={closeStickersPopup}
        >
          <Stickers onClose={closeStickersPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TodoSticker;
