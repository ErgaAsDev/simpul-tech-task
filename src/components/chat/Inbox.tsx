import { FunctionComponent } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { fetchUsersChats, searchChat } from "../../slices/chatSlice";
import Messages from "./Messages";
import MessageContainer from "./MessageContainer";
import { Circles } from "react-loader-spinner";

const Inbox: React.FC = () => {
  const { newUsers, openChat, isMessageOpen } = useSelector(
    (state: RootState) => state.chat,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (newUsers.status === "idle") {
      setTimeout(() => {
        dispatch(fetchUsersChats());
      }, 300);
    }
  }, [newUsers.status, dispatch]);

  const handleSearchChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    dispatch(searchChat(searchQuery));
  }, [searchQuery, dispatch]);

  console.log(newUsers.users, searchQuery);

  const loading = newUsers.status === "idle" || newUsers.status === "loading";

  return (
    <div className="relative bg-white w-[734px] h-[737px] flex flex-col items-center justify-start gap-[10px] max-w-full max-h-full overflow-auto text-left text-sm text-goldenrod font-inter">
      <div
        className={`flex flex-col py-5 px-0 items-start justify-start ${
          !isMessageOpen && "gap-[28px]"
        }  text-black`}
      >
        <input
          className={`${
            isMessageOpen && "hidden"
          } font-medium font-inter text-xs bg-white rounded-8xs box-border w-[666px] flex flex-row p-2.5 items-center justify-center border-[1px] border-solid border-gray-3`}
          placeholder="Search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {loading ? (
          <div className="absolute top-[200px] left-[300px]">
            <Circles
              height="80"
              width="80"
              color="#C4C4C4"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <br />
            <h2>Loading...</h2>
          </div>
        ) : newUsers.status === "succeeded" ? (
          newUsers.users.slice(0, 5).map((user) => (
            <div key={user.id}>
              <Messages {...user} />
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Inbox;
