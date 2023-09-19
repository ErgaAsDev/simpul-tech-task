import { FunctionComponent, useState, useRef, useCallback } from "react";
import Todos from "./Todos";
import PortalPopup from "./PortalPopup";

const TodoButton: FunctionComponent = () => {
  const groupButtonRef = useRef<HTMLButtonElement>(null);
  const [isTodosPopupOpen, setTodosPopupOpen] = useState(false);

  const openTodosPopup = useCallback(() => {
    setTodosPopupOpen(true);
  }, []);

  const closeTodosPopup = useCallback(() => {
    setTodosPopupOpen(false);
  }, []);

  return (
    <>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px]"
        ref={groupButtonRef}
        onClick={openTodosPopup}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[60px] h-[60px]"
          alt=""
          src="/group-1662.svg"
        />
      </button>
      {isTodosPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          top={40}
          relativeLayerRef={groupButtonRef}
          onOutsideClick={closeTodosPopup}
        >
          <Todos onClose={closeTodosPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TodoButton;
