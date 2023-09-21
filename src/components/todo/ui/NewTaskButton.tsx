import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { addTaskItem } from "../../../slices/todoSlice";

const NewTaskButton: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const randomId = Math.floor(Math.random() * 1000); // Generate a random integer ID
    const newTask = {
      id: randomId,
      title: "New Task",
      body: "No Description",
      taskDone: false,
      itemOpen: true,
      taskOpen: true,
      dateTask: "2023/09/16",
    };

    dispatch(addTaskItem(newTask)); // Dispatch the action with the new task
  };
  return (
    <button
      className="cursor-pointer [border:none] py-2 px-4 bg-dodgerblue rounded-8xs h-10 flex flex-row box-border items-center justify-center"
      onClick={handleAddTask}
    >
      <b className="relative text-sm font-inter text-white text-left">
        New Tasks
      </b>
    </button>
  );
};

export default NewTaskButton;
