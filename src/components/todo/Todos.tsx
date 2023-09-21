import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../slices/todoSlice";
import { AppDispatch, RootState } from "../../store";
import NewTaskButton from "./ui/NewTaskButton";
import Todo from "./Todo";
import { Circles } from "react-loader-spinner";

type TodosType = {
  onClose?: () => void;
};

const Todos: FunctionComponent<TodosType> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { newTodo } = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    if (newTodo.status === "idle") {
      setTimeout(() => {
        dispatch(fetchPosts());
      }, 300);
    }
  }, [newTodo.status, dispatch]);

  const loading = newTodo.status === "idle" || newTodo.status === "loading";

  return (
    <div
      className={`relative bg-white w-[734px] h-[737px] flex flex-col py-[18px] px-[22px] box-border items-center ${
        loading ? "justify-center" : "justify-start"
      } overflow-x-hidden max-w-full max-h-full overflow-auto text-left text-sm text-darkslategray font-inter rounded`}
    >
      {loading ? (
        <div>
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
      ) : newTodo.status === "succeeded" ? (
        <div className="flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <Dropdown
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Personal Errands" },
                      { value: "Urgent-to-do" },
                    ] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                {`My Tasks `}
                <DownOutlined />
              </Button>
            </Dropdown>
            <NewTaskButton />
          </div>
          {newTodo.posts.slice(0, 10).map((task) => {
            return <Todo key={task.id} {...task} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Todos;
