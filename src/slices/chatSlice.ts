import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getUsersChats, getUsersPics } from "../api/chatApi";

interface ChatUsersSlices {
  isMessageOpen: boolean;
  openChat: boolean;
  newUsers: {
    users: any[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null | string | undefined;
  };
  filteredUsers: any[];
  replyMessageOpen: boolean;
  repliedMessageOpen: boolean;
}

const initialState: ChatUsersSlices = {
  isMessageOpen: false,
  openChat: false,
  newUsers: { users: [], status: "idle", error: null },
  filteredUsers: [],
  replyMessageOpen: false,
  repliedMessageOpen: false,
};

export const fetchUsersChats = createAsyncThunk<any[]>(
  "users/fetchUsersChats",
  async () => {
    const data = await getUsersChats();
    return data;
  },
);

export const fetchUsersPics = createAsyncThunk<any[]>(
  "users/fetchUsersPics",
  async () => {
    const data = await getUsersPics();
    return data;
  },
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    handleOpenChat: (state, action) => {
      const userId = action.payload;
      const toggleChatOpen = state.newUsers.users.find(
        (chat) => chat.id === userId,
      );

      if (toggleChatOpen) {
        state.openChat = true;
      }
    },
    handleCloseChat: (state) => {
      state.openChat = false;
    },
    handleOpenMessage: (state) => {
      state.isMessageOpen = true;
    },
    handleCloseMessage: (state) => {
      state.isMessageOpen = false;
    },
    addMyNewChat: (state, action) => {
      const { newChat, id } = action.payload;
      const newChatById = state.newUsers.users.find((user) => user.id === id);

      if (newChatById) {
        newChatById.myNewChat.push(newChat);
      }
      if (state.replyMessageOpen) {
        state.repliedMessageOpen = true;
      }

      state.replyMessageOpen = false;
    },
    deleteChat: (state, action) => {
      const chatId = action.payload;
      const userToDeleteChat = state.newUsers.users.find((user) =>
        user.myNewChat.some((chat: any) => chat.id === chatId),
      );

      if (userToDeleteChat) {
        // Create a new array of user's chats without the chat to be deleted
        userToDeleteChat.myNewChat = userToDeleteChat.myNewChat.filter(
          (chat: any) => chat.id !== chatId,
        );
      }
    },
    searchChat: (state, action) => {
      const filteredUsers = state.newUsers.users.filter((user) =>
        user.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        filteredUsers:
          action.payload.length > 0 ? filteredUsers : [...state.newUsers.users],
      };
    },
    replyChatOpen: (state, action) => {
      const chatId = action.payload;
      const findChatById = state.newUsers.users.find(
        (user) => user.id === chatId,
      );
      if (findChatById) {
        state.replyMessageOpen = true;
        state.repliedMessageOpen = false;
      }
    },
    replyChatClose: (state) => {
      state.replyMessageOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersChats.pending, (state) => {
        state.newUsers.status = "loading";
      })
      .addCase(fetchUsersChats.fulfilled, (state, action) => {
        state.newUsers.status = "succeeded";
        state.newUsers.users = action.payload.map((user) => ({
          ...user,
          myNewChat: [
            {
              id: Math.floor(Math.random() * 1000),
              name: "You",
              message: "Hi my name is Erga",
              time: "19:45",
              isReplied: false,
            },
          ],
        }));
      })
      .addCase(fetchUsersChats.rejected, (state, action) => {
        state.newUsers.status = "failed";
        state.newUsers.error = action.error.message;
      });
  },
});
export const {
  handleOpenChat,
  handleCloseChat,
  handleCloseMessage,
  handleOpenMessage,
  addMyNewChat,
  deleteChat,
  searchChat,
  replyChatOpen,
  replyChatClose,
} = chatSlice.actions;
export default chatSlice.reducer;
