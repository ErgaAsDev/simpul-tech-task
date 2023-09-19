import { FunctionComponent, useState, useRef, useCallback } from "react";
import DeleteTask from "./DeleteTask";
import PortalPopup from "./PortalPopup";

const TodoHeader: FunctionComponent = () => {
  const deleteTaskButtonRef = useRef<HTMLButtonElement>(null);
  const [isDeleteTaskPopupOpen, setDeleteTaskPopupOpen] = useState(false);

  const openDeleteTaskPopup = useCallback(() => {
    setDeleteTaskPopupOpen(true);
  }, []);

  const closeDeleteTaskPopup = useCallback(() => {
    setDeleteTaskPopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-row items-center justify-start gap-[39px] text-left text-sm text-darkslategray font-inter">
        <input
          className="relative box-border w-[18px] h-[18px] border-[2px] border-solid border-gray-3"
          type="checkbox"
        />
        <div className="relative font-semibold">
          Close off Case #012920 - RODRIGUES, Amiguel
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[15px] text-indianred">
          <div className="relative">2 Days Left</div>
          <div className="relative text-dimgray">12/06/2021</div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 [transform:_rotate(180deg)] [transform-origin:0_0]">
            <img
              className="absolute h-[30.88%] w-6/12 top-[-65.44%] right-[125%] bottom-[134.56%] left-[-75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconnavigationexpand-more-24px.svg"
            />
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-3.5 h-[3.5px]"
            ref={deleteTaskButtonRef}
            onClick={openDeleteTaskPopup}
          >
            <img
              className="absolute top-[0px] left-[0px] w-3.5 h-[3.5px]"
              alt=""
              src="/iconnavigationmore-vert-24px.svg"
            />
          </button>
        </div>
      </div>
      {isDeleteTaskPopupOpen && (
        <PortalPopup
          placement="Bottom right"
          bottom={8}
          relativeLayerRef={deleteTaskButtonRef}
          onOutsideClick={closeDeleteTaskPopup}
        >
          <DeleteTask onClose={closeDeleteTaskPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TodoHeader;
