import { useState } from "react";

export const useEditValue = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(false);

  const handleIconClick = () => {
    setIsEditing(!isEditing);
  };

  function handleOnKeyDown(e: any) {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  }

  return {
    isEditing,
    setIsEditing,
    newTask,
    setNewTask,
    handleIconClick,
    handleOnKeyDown,
  };
};
