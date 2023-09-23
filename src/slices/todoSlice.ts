import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getPost } from "../api/todoApi";
import { dataStickers } from "../helpers/stickerData";

interface TodoState {
  addNewTitleTodo: boolean;
  newTaskTitle: boolean;
  newTodo: {
    posts: any[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null | string | undefined;
  };
}

export const fetchPosts = createAsyncThunk<any[]>(
  "posts/fetchPosts",
  async () => {
    const data = await getPost();
    return data;
  },
);

const initialState: TodoState = {
  addNewTitleTodo: false,
  newTaskTitle: false,
  newTodo: { posts: [], status: "idle", error: null },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    handleDeleteTaskPopup: (state, action) => {
      const taskId = action.payload;
      const toggleDeleteTask = state.newTodo.posts.find(
        (post) => post.id === taskId,
      );
      if (toggleDeleteTask) {
        toggleDeleteTask.deleteTaskPopup = !toggleDeleteTask.deleteTaskPopup;
      }
    },
    handleTaskDone: (state, action) => {
      const taskId = action.payload;
      const toggleTaskDone = state.newTodo.posts.find(
        (post) => post.id === taskId,
      );
      if (toggleTaskDone) {
        toggleTaskDone.taskDone = !toggleTaskDone.taskDone;
      }
    },
    handleTodoItem: (state, action) => {
      const taskId = action.payload;
      const toggleItemOpen = state.newTodo.posts.find(
        (post) => post.id === taskId,
      );
      if (toggleItemOpen) {
        toggleItemOpen.itemOpen = !toggleItemOpen.itemOpen;
      }
    },
    handleValueChange: (state, action) => {
      const { value, id } = action.payload;
      const valueToUpdate = state.newTodo.posts.find((post) => post.id === id);
      if (valueToUpdate) {
        valueToUpdate.body = value;
      }
    },
    handleTitleChange: (state, action) => {
      const { value, id } = action.payload;
      const valueToUpdate = state.newTodo.posts.find((post) => post.id === id);
      if (valueToUpdate) {
        valueToUpdate.title = value;
      }
    },
    handleOnKeyDown: (state, action) => {
      const { key, id } = action.payload;
      if (key === "Enter") {
        const toggleNewTask = state.newTodo.posts.find(
          (post) => post.id === id,
        );
        if (toggleNewTask) {
          toggleNewTask.taskOpen = false;
        }
      }
    },
    deleteTaskItem: (state, action) => {
      const taskId = action.payload;
      state.newTodo.posts.splice(
        state.newTodo.posts.findIndex((todo) => todo.id === taskId),
        1,
      );
    },
    addTaskItem: (state, action) => {
      const newTask = action.payload;
      // const toggleNewTask = state.newTodo.posts.find((post) => post.id === id);
      // if (toggleNewTask) {
      //   toggleNewTask.itemOpen = !toggleNewTask.itemOpen;
      // }
      state.newTodo.posts.unshift(newTask);
    },
    addStickers: (state, action) => {
      const { postId, sticker } = action.payload;

      // Find the post with the matching postId
      const postIndex = state.newTodo.posts.findIndex(
        (post) => post.id === postId,
      );

      if (postIndex !== -1) {
        const updatedPost = { ...state.newTodo.posts[postIndex] };

        // Check if the sticker is already in the hasStickers array
        const isStickerInHasStickers = updatedPost.hasStickers.some(
          (s: any) => s.id === sticker.id,
        );

        if (isStickerInHasStickers) {
          // Remove the sticker if it's already in the array
          updatedPost.hasStickers = updatedPost.hasStickers.filter(
            (s: any) => s.id !== sticker.id,
          );
        } else {
          // Add the sticker if it's not in the array
          updatedPost.hasStickers = [...updatedPost.hasStickers, sticker];
        }

        // Update the state with the modified post
        state.newTodo.posts[postIndex] = updatedPost;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.newTodo.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.newTodo.status = "succeeded";
        state.newTodo.posts = action.payload.map((post) => ({
          ...post,
          hasStickers: [],
          dateTask: "2023/09/16",
          taskDone: false,
          itemOpen: true,
          deleteTaskPopup: false,
          taskOpen: false, // Add the taskDone, etc property with an initial value
        }));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.newTodo.status = "failed";
        state.newTodo.error = action.error.message;
      });
  },
});

export const {
  handleDeleteTaskPopup,
  handleTaskDone,
  handleTodoItem,
  handleValueChange,
  handleTitleChange,
  handleOnKeyDown,
  deleteTaskItem,
  addTaskItem,
  addStickers,
} = todoSlice.actions;
export default todoSlice.reducer;
