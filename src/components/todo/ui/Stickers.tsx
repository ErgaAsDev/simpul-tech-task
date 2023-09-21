import { useState } from "react";

interface StickersProps {
  stickers: any;
  id: number;
  pickedStickers: any[];
  handleAddStickers: any;
  dataStickers: any[];
}

const Stickers: React.FC<StickersProps> = ({
  stickers,
  id,
  pickedStickers,
  handleAddStickers,
  dataStickers,
}: StickersProps) => {
  return (
    <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[277px] overflow-hidden flex flex-col p-2.5 box-border items-start justify-start gap-[10px] max-w-full max-h-full">
      {dataStickers.map((data) => {
        return (
          <button
            key={data.id}
            id={data.id.toString()}
            onClick={handleAddStickers}
            className={`cursor-pointer ${
              pickedStickers.some(
                (pickedSticker) => pickedSticker.id === data.id,
              )
                ? "border border-blue"
                : ""
            } py-[5px] pr-0 pl-2 ${
              data.color
            } self-stretch rounded flex flex-row items-start justify-start`}
          >
            <div
              id={data.id.toString()}
              className="relative text-sm font-medium font-inter text-dimgray text-left"
            >
              {data.sticker}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Stickers;
