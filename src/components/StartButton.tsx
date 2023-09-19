import { FunctionComponent, useState, useRef, useCallback } from "react";
import Buttons from "./Buttons";
import PortalPopup from "./PortalPopup";

const StartButton: FunctionComponent = () => {
  const groupButtonRef = useRef<HTMLButtonElement>(null);
  const [isButtonsPopupOpen, setButtonsPopupOpen] = useState(false);

  const openButtonsPopup = useCallback(() => {
    setButtonsPopupOpen(true);
  }, []);

  const closeButtonsPopup = useCallback(() => {
    setButtonsPopupOpen(false);
  }, []);

  return (
    <>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] w-[68px] h-[68px]"
        ref={groupButtonRef}
        onClick={openButtonsPopup}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[68px] h-[68px]"
          alt=""
          src="/ellipse-7.svg"
        />
        <img
          className="absolute top-[calc(50%_-_28px)] left-[calc(50%_-_28px)] w-14 h-14"
          alt=""
          src="/feathericon--cloudlightning.svg"
        />
      </button>
      {isButtonsPopupOpen && (
        <PortalPopup
          placement="Top left"
          top={-65}
          left={-160}
          relativeLayerRef={groupButtonRef}
          onOutsideClick={closeButtonsPopup}
        >
          <Buttons onClose={closeButtonsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StartButton;
