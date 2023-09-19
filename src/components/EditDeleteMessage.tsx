import { FunctionComponent } from "react";

type EditDeleteMessageType = {
  onClose?: () => void;
};

const EditDeleteMessage: FunctionComponent<EditDeleteMessageType> = ({
  onClose,
}) => {
  return (
    <div className="relative rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[126px] flex flex-col py-3 px-0 box-border items-start justify-start max-w-full max-h-full overflow-auto text-left text-sm text-dodgerblue font-inter">
      <div className="self-stretch flex flex-col py-0 px-2 items-start justify-start gap-[13px]">
        <div className="relative">Edit</div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/line-104-stroke.svg"
        />
        <div className="relative text-indianred">Delete</div>
      </div>
    </div>
  );
};

export default EditDeleteMessage;
