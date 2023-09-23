import { FunctionComponent } from "react";
import { deleteChat } from "../../../slices/chatSlice";
import { useDispatch } from "react-redux";

type EditDeleteMessageType = {
  onClose?: () => void;
  id: number;
};

const EditDeleteMessage: FunctionComponent<EditDeleteMessageType> = ({
  onClose,
  id,
}) => {
  const dispatch = useDispatch();
  console.log(id);

  return (
    <div className="relative rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[126px] flex flex-col py-3 px-0 box-border items-start justify-start max-w-full max-h-full overflow-auto text-left text-sm text-dodgerblue font-inter">
      <div className="self-stretch flex flex-col py-0 px-2 items-start justify-start gap-[13px]">
        <div className="relative">Edit</div>
        <div className="self-stretch border-t border-[#BDBDBD] border-solid"></div>
        <div
          className="relative text-indianred cursor-pointer"
          onClick={() => dispatch(deleteChat(id))}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default EditDeleteMessage;
