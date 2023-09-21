import { FunctionComponent, useState, useRef, useCallback } from "react";
import Todos from "./todo/Todos";
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
        <div
          className={`absolute flex top-[0px] left-[0px] w-[60px] h-[60px] ${
            isTodosPopupOpen ? "bg-[#F8B76B]" : "bg-white"
          } rounded-[50%] items-center justify-center`}
        >
          <img
            src={`${
              isTodosPopupOpen ? "/task-active-icon.png" : "/task-icon.png"
            }`}
            alt="task"
            className="w-[24px] h-[18px]"
          />
        </div>
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
