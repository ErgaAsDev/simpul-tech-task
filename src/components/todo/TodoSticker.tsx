import { FunctionComponent, useState, useRef, useCallback } from "react";
import Stickers from "./ui/Stickers";
import PortalPopup from "../PortalPopup";
import { TodoProps } from "../../types/todoTypes";
import { dataStickers } from "../../helpers/stickerData";

const TodoSticker: React.FC<TodoProps> = ({ hasStickers, id }: TodoProps) => {
  const stickerRef = useRef<HTMLButtonElement>(null);
  const [isStickersPopupOpen, setStickersPopupOpen] = useState(false);
  const [pickedStickers, setPickedStickers] = useState<
    Array<{ id: number; sticker: string; color: string }>
  >([]);

  const handleAddStickers = (e: any) => {
    const id = Number(e.target.id);
    const stickerToAdd = dataStickers.find((sticker) => sticker.id === id);

    if (stickerToAdd) {
      // Check if the sticker is already in the pickedStickers array
      const isStickerInPickedStickers = pickedStickers.some(
        (sticker) => sticker.id === id,
      );

      if (isStickerInPickedStickers) {
        // Remove the sticker if it's already in the array
        setPickedStickers((prevStickers) =>
          prevStickers.filter((sticker) => sticker.id !== id),
        );
      } else {
        // Add the sticker if it's not in the array
        setPickedStickers((prevStickers) => [...prevStickers, stickerToAdd]);
      }
    }
  };

  const openStickersPopup = useCallback(() => {
    setStickersPopupOpen(true);
  }, []);

  const closeStickersPopup = useCallback(() => {
    setStickersPopupOpen(false);
  }, []);

  console.log(pickedStickers);

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
          {pickedStickers.length !== 0 ? (
            <div className="flex gap-1">
              {pickedStickers.map((sticker) => (
                <div
                  className={`${sticker.color} px-2 rounded`}
                  key={sticker.id}
                >
                  {sticker.sticker}
                </div>
              ))}
            </div>
          ) : (
            <i className="relative text-base inline-block font-lato text-gray-3 text-left w-24 shrink-0">
              Add Stickers
            </i>
          )}
        </div>
      </button>
      {isStickersPopupOpen && (
        <PortalPopup
          placement="Bottom left"
          relativeLayerRef={stickerRef}
          onOutsideClick={closeStickersPopup}
        >
          <Stickers
            stickers={hasStickers}
            id={id}
            pickedStickers={pickedStickers}
            handleAddStickers={handleAddStickers}
            dataStickers={dataStickers}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default TodoSticker;
