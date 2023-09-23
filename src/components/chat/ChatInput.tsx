import { FunctionComponent } from "react";
import { ChatTypes } from "../../types/chatTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addMyNewChat, replyChatClose } from "../../slices/chatSlice";
import { useState } from "react";
import { currentTime } from "../../helpers/currentTime";

const ChatInput: FunctionComponent<ChatTypes> = ({ id, name, company }) => {
  const dispatch = useDispatch();
  const { replyMessageOpen } = useSelector((state: RootState) => state.chat);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e: any) {
    setInputValue(e.target.value);
  }

  function handleAddNewChat() {
    const randomId = Math.floor(Math.random() * 1000);
    const newChat = {
      id: randomId,
      name: "You",
      message: inputValue,
      time: currentTime,
      isReplied: replyMessageOpen ? true : false,
    };
    setInputValue("");

    if (inputValue) {
      dispatch(addMyNewChat({ newChat, id }));
    }
  }
  return (
    <div>
      {replyMessageOpen && (
        <div className="border border-solid border-gray-3 bg-[#F2F2F2] rounded px-3 py-2 w-[580px]">
          <div className="self-stretch flex justify-between">
            <h4 className="font-bold">Replying to {name}</h4>
            <img
              src="./close_24px.png"
              alt=""
              className="w-[12px] h-[12px] cursor-pointer"
              onClick={() => dispatch(replyChatClose())}
            />
          </div>
          <h4>{company.catchPhrase}</h4>
        </div>
      )}
      <div className="flex flex-row items-start justify-start gap-[13px]">
        <input
          className="bg-white rounded-8xs box-border w-[580px] h-10 flex flex-row py-2.5 px-4 items-center justify-start border-[1px] border-solid border-gray-3"
          placeholder="Type a new message"
          type="text"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button
          onClick={handleAddNewChat}
          className="cursor-pointer [border:none] text-white py-2 px-4 bg-dodgerblue rounded-8xs w-[76px] h-10 flex flex-row box-border items-center justify-center"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
