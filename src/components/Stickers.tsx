import { FunctionComponent } from "react";

type StickersType = {
  onClose?: () => void;
};

const Stickers: FunctionComponent<StickersType> = ({ onClose }) => {
  return (
    <div className="relative rounded bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[277px] overflow-hidden flex flex-col p-2.5 box-border items-start justify-start gap-[10px] max-w-full max-h-full">
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-aliceblue self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Important ASAP
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-navajowhite self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Offline Meeting
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-blanchedalmond self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Virtual Meeting
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-paleturquoise self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          ASAP
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-lightgoldenrodyellow self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Client Related
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-lightsteelblue self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Self Task
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-lavender-100 self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Appointment
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-[5px] pr-0 pl-2 bg-skyblue self-stretch rounded flex flex-row items-start justify-start">
        <div className="relative text-sm font-medium font-inter text-dimgray text-left">
          Court Related
        </div>
      </button>
    </div>
  );
};

export default Stickers;
